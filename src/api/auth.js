const { Router } = require('express')
const AuthService = require('../services/js/auth-api')

const routes = Router()

routes.post('/login', (req, res) => {
  const { email, password } = req.body

  if (email === undefined) {
    return res.status(400).json({ error: 'email body param not found' })
  }

  if (password === undefined) {
    return res.status(400).json({ error: 'password body param not found' })
  }

  // initialize auth service
  const auth = AuthService

  //generate token with grpc auth service
  auth
    .login(email, password)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err.message }))
})

routes.post('/signup', (req, res) => {
  const { data } = req.body

  if (data === undefined) {
    return res.status(400).json({ error: 'data body param not found' })
  }

  // initialize auth service
  const auth = AuthService

  //generate token with grpc auth service
  auth
    .signup(data)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err.message }))
})

module.exports = routes
