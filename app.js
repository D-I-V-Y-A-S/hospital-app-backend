require('dotenv').config()
const express = require('express')
const app = express()
const PORT =  process.env.PORT || 3600 

const cors = require('cors')
const mongoose = require('mongoose')
const patientsRouter = require('./routes/patientRoute')

app.use(cors())
app.use(express.json()) //post data will be in json format

app.get('/',(req,res)=>{
    res.status(200).send("API Works!")
})

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully'))

app.use('/api/v1/patients', patientsRouter)

app.listen(PORT,
    console.log(`Server started running on http://localhost:${PORT}/api/v1/patients`))