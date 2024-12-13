const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Worlsjhjd!');
})

app.get('/harsh',(req,res)=>{
  res.send('Hello Worldszkj!');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})