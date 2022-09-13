const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
const {processTeams} = require('./controller.js')
app.post('/saveleague', processTeams)





app.listen(4009, () =>{
    console.log('Listening on 4009')
})


//install packages
//write out consts for pagackes