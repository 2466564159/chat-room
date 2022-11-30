const express = require('express')
const router = express.Router()

const users = new Map()

router.get('/login', (req, res) => {
  const user = {}
  user.name = req.query.name
  user.age = req.query.age
  user.gender = req.query.gender

  if (user.name && !users.has(user.name)) {
    users.set(user.name, user)
    return res.status(200).json({ msg: '登录成功' })
  } else {
    return res.status(500).json({ msg: '名称已被使用' })
  }
})

module.exports = router