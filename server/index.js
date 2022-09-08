const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/saveleague', (req, res) =>{
    const league = req.body

    const template = [['Team1', 'Team2'],['Team2', 'Team1']]
    let stringtemplate = JSON.stringify(template)
    //Where we will do all 12 replacements
    stringtemplate = stringtemplate.replaceAll(`Team1`, league.Team1)
    stringtemplate = stringtemplate.replaceAll(`Team2`, league.Team2)
    let result = JSON.parse(stringtemplate)
    console.log(result)
})



app.listen(4009, () =>{
    console.log('Listening on 4009')
})


//install packages
//write out consts for pagackes