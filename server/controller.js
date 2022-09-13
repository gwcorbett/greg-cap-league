const schedule = [
    [['team07','team08'],['team10','team06'],['team09','team04'],['team11','team02'],['team12','team03'],['team05','team01'],],//W1

    [['team10','team12'],['team02','team08'],['team01','team04'],['team05','team11'],['team06','team03'],['team09','team07'],],//W2

    [['team11','team09'],['team07','team04'],['team08','team05'],['team06','team12'],['team03','team02'],['team10','team01'],],//W3

    [['team04','team02'],['team03','team09'],['team12','team11'],['team05','team10'],['team06','team07'],['team01','team08'],],//W4

    [['team09','team10'],['team12','team02'],['team06','team08'],['team04','team11'],['team07','team01'],['team03','team05'],],//W5

    [['team07','team05'],['team02','team06'],['team11','team10'],['team08','team03'],['team12','team04'],['team01','team09'],],//W6

    [['team04','team03'],['team10','team07'],['team05','team06'],['team02','team09'],['team01','team12'],['team08','team11'],],//W7

    [['team02','team01'],['team04','team05'],['team10','team09'],['team06','team11'],['team08','team12'],['team03','team07'],],//W8

    [['team01','team03'],['team10','team11'],['team07','team06'],['team05','team02'],['team09','team12'],['team04','team08'],],//W9

    [['team02','team04'],['team03','team10'],['team08','team07'],['team09','team05'],['team11','team12'],['team01','team06'],],//W10

    [['team01','team02'],['team07','team12'],['team06','team05'],['team11','team03'],['team04','team10'],['team08','team09'],],//W11

    [['team05','team08'],['team11','team07'],['team03','team01'],['team02','team10'],['team12','team09'],['team06','team04'],],//W12

    [['team03','team04'],['team12','team05'],['team07','team02'],['team10','team08'],['team11','team01'],['team09','team06'],],//W13

    [['team04','team01'],['team02','team03'],['team05','team07'],['team08','team06'],['team12','team10'],['team09','team11'],],//W14
]

database = []

module.exports = {
    processTeams: (req, res) =>{
        const league = req.body
        const name = league.name
    
        const template = schedule
        let stringtemplate = JSON.stringify(template)
        //Where we will do all 12 replacements
        stringtemplate = stringtemplate.replaceAll(`team01`, league.team1)
        stringtemplate = stringtemplate.replaceAll(`team02`, league.team2)
        stringtemplate = stringtemplate.replaceAll(`team03`, league.team3)
        stringtemplate = stringtemplate.replaceAll(`team04`, league.team4)
        stringtemplate = stringtemplate.replaceAll(`team05`, league.team5)
        stringtemplate = stringtemplate.replaceAll(`team06`, league.team6)
        stringtemplate = stringtemplate.replaceAll(`team07`, league.team7)
        stringtemplate = stringtemplate.replaceAll(`team08`, league.team8)
        stringtemplate = stringtemplate.replaceAll(`team09`, league.team9)
        stringtemplate = stringtemplate.replaceAll('team10', league.team10)
        stringtemplate = stringtemplate.replaceAll(`team11`, league.team11)
        stringtemplate = stringtemplate.replaceAll(`team12`, league.team12)
        let result = JSON.parse(stringtemplate)
        database.push({name:name, schedule:result})
        console.log(JSON.stringify(database))
        res.status(200).send(result)
    },
}