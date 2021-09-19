const env = require('dotenv')
const express = require('express')
const { Sequelize } = require('sequelize');
const jwt = require('jsonwebtoken');

env.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3003;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const JWT_PASSWORD =  process.env.JWT_PASSWORD;


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
});

try {
  sequelize.authenticate().catch(error => {
    console.log(error)
  })
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.get('/', (req, res) => {
  return res.send('API de cadastro de usuários!')
})

app.post('/login',(req, res) => {
  const user = req.body.user;
  const token = jwt.sign(user,JWT_PASSWORD);

  res.send(token);
})

app.listen(port, () => { 
  console.log('API iniciada na porta ', port)
})