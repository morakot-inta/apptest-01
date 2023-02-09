const express = require('express')
const app = express()
const port = 3000

data = '{"name":"John", "age":30, "car":null}'

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`http://127.0.0.1:3000`)
})
