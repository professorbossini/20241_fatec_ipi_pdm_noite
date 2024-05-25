require('dotenv').config()
const express = require ('express')
// const mysql2 = require('mysql2')
const pg = require('pg')
const { Client } = pg
const app = express()
// {"texto": "Fazer café"}
app.use(express.json())
const {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_SCHEMA
} = process.env


//mysql
// app.get('/lembretes', (req, res) => {
//   const connection = mysql2.createConnection({
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASSWORD,
//     port: DB_PORT,
//     database: DB_SCHEMA
//   })

//   connection.query(
//     'SELECT * FROM tb_lembrete',
//     (err, results, fields) => {
//       console.log(err)
//       console.log(results)
//       res.json(results)
//     }
//   )
// })

app.get('/lembretes', async (req, res) => {
  let client
  try{
    client = new Client({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT,
      database: DB_SCHEMA
    })
    client.connect()
    const result = await client.query('SELECT * FROM tb_lembrete')
    res.json(result.rows)
  }
  catch(err){
    res.status(500).json({mensagem: 'Deu erro'})
  }
  finally{
    client.end()
  }  
})

app.listen(
  PORT,
  () => console.log(`Back subiu na porta ${PORT}.`)
)

