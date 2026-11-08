const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('Бэкенд ресторана работает!');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
