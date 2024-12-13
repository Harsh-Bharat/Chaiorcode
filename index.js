const express = require('express')
require('dotenv').config()
const app = express()

const port = 4001

app.get('/', (req, res) => {
  res.send('Hello Worlsjhjd!');
})

app.get('/harsh',(req,res)=>{
  res.send('Hello Worldszkj!');
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})