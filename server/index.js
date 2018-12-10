const express = require('express')
const PORT = 5000
const controller = require('./controllers/mainController')

const app = express()

app.use(express.json())

app.get('/api/todos', controller.getAll)

app.post('/api/todo', controller.createNew)

app.delete('/api/todo/:id', controller.delete)

app.put('/api/todo/:id', controller.update)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))