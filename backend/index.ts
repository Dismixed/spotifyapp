import express from 'express'
const app = express()
import axios from 'axios'

const cors = require('cors')
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
