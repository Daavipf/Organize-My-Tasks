require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.json())

const tasks = require('./routes/tasks')
app.use('/task', tasks)

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})