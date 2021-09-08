const env = require('dotenv')
const express = require('express')


env.config()
const app = express()


const port = process.env.PORT || 3003


app.get('/', (req, res) => {
  return res.send('API de cadastro de usuários!')
})


app.listen(port, () => { 
  console.log('API iniciada na porta ', port)
})