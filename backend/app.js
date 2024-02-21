const connectToMongo=require('./db');
const express = require('express')
const auth = require('./routes/auth')
var cors = require('cors')
connectToMongo();


const app = express()
app.use(cors())
const port = 8000

app.use(express.json())
app.use("/api/auth", auth)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})