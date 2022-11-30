<template>
  <div class="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef">

      <el-form-item prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入名称" />
      </el-form-item>

      <el-form-item prop="email">
        <el-input v-model="ruleForm.email" placeholder="请输入邮箱" />
      </el-form-item>

      <el-form-item prop="gender">
        <el-radio-group v-model="ruleForm.gender">
          <el-radio size="small" label="男">男</el-radio>
          <el-radio size="small" label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-button @click="submitForm(ruleFormRef)">进入群聊</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { FormRules, FormInstance } from 'element-plus'
import { login } from '../api/http'

const router = useRouter()

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  name: '',
  email: '',
  gender: '男'
})

const validateEmail = (rule: any, value: any, callback: any) => {
  const reg = new RegExp('^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$')
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error('格式有误'))
  }
}

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '不能为空', trigger: 'blur' },
    { min: 2, message: '长度至少为2', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '不能为空', trigger: 'blur' },
    { validator: validateEmail, trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '不能为空', trigger: 'change' }
  ]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return

  formEl.validate(async (valid, fields) => {
    if (valid) {
      const res = await login({ ...ruleForm })
      
      if (res.status === 200) {
        const data = await res.json()
        console.log(data)
        router.push('/home')
      } else {
        console.log('登录失败')
      }
      
    }
  })
  // console.log(name.value)
  // router.push({ path: '/home' })
}
</script>

<style lang="less" scoped>
.login>form {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  .el-button {
    width: 180px;
  }
}
</style>