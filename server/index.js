const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
const {processTeams, getLeague} = require('./controller.js')
app.post('/saveleague', processTeams)
app.get('/getleague/:name', getLeague)
//Url for axios will be: http://localhost:4009/getleague/${leaguevar}
//In controller function I will access the league name by saying req.params.name


app.listen(4009, () =>{
    console.log('Listening on 4009')
})


//install packages
//write out consts for pagackes