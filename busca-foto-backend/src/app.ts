import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import axios from 'axios'
const app = express()
app.use(express.json())
const PEXELS_KEY = process.env.PEXELS_KEY
//isso é um objeto JSON
/*
  "
    {
      "nome": "Ana",
      "idade": 17
    }
  "
*/
//um endpoint é uma tripla
//caracterizada por:
//método do protocolo HTTP, padrão de acesso e funcionalidade
//isso é um endpoint
//GET /search (req, res) => {}
//uma API é uma (Application Programming Interface) coleção de endpoints
app.get('/search', async (req, res) => {
  const client = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
      Authorization: PEXELS_KEY
    }
  })
  
  const resposta = await client.get('/search', {
    params: {
      query: req.query.query
    }
  })
  res.json(resposta.data)
})

const port: number = 3001
app.listen(port, () => {console.log(`Executando na porta ${port}`)})
