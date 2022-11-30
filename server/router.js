const express = require('express')
const router = express.Router()

let user_id = 1
const users = new Map()

router.get('/login', (req, res) => {
  const user = {}
  user.id = user_id++
  user.name = req.query.name
  user.email = req.query.email
  user.gender = req.query.gender

  if (user.name && !users.has(user.name)) {
    users.set(user.name, user)
    return res.status(200).json({ msg: '登录成功', data: { user } })
  } else {
    return res.status(500).json({ msg: '名称已被使用' })
  }
})

// router.ws('/ws', function(ws, req) {
//   console.log('/ws')
//   ws.on('message', function(msg) {
//     console.log(msg)
//     ws.send('哦! 你也好呀! 我是服务器')
//   })

// })

module.exports = router