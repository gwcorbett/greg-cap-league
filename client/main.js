const form = document.getElementById('teamInput')
const grabLeagueButton = document.getElementById('grab-by-name-form')
const grabLeagueInput = document.getElementById('grab-by-name')
const team1 = document.getElementById('team1')
const team2 = document.getElementById('team2')
const team3 = document.getElementById('team3')
const team4 = document.getElementById('team4')
const team5 = document.getElementById('team5')
const team6 = document.getElementById('team6')
const team7 = document.getElementById('team7')
const team8 = document.getElementById('team8')
const team9 = document.getElementById('team9')
const team10 = document.getElementById('team10')
const team11 = document.getElementById('team11')
const team12 = document.getElementById('team12')
const leagueName = document.getElementById('league-name')
const schedule = document.querySelector('section')

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const postobj = {
        name: leagueName.value,
        team1: team1.value,
        team2: team2.value,
        team3: team3.value,
        team4: team4.value,
        team5: team5.value,
        team6: team6.value,
        team7: team7.value,
        team8: team8.value,
        team9: team9.value,
        team10: team10.value,
        team11: team11.value,
        team12: team12.value,
    }


    axios.post('http://localhost:4009/saveleague', postobj)
    .then((result) => {
        const data = result.data
        processSchedule(data)
        console.log(data)
    })
});


function processSchedule(fullData){

    schedule.innerHTML = ''

    let data = fullData.schedule
    let name = fullData.name
    let leagueHeader = document.createElement('h2')
    leagueHeader.innerHTML = name
    schedule.appendChild(leagueHeader)
    //Loop through the data per week and create a div for each.
    for (let i=0; i < data.length; i++){
            let card = document.createElement('div')
            card.innerHTML = `<h1>Week ${i+1}</h1>`
            for (let k=0; k < data[i].length; k++){
                let matchup = document.createElement('span')
                matchup.innerHTML = `${data[i][k][0]} vs ${data[i][k][1]}`
                matchup.classList.add('matchup-span')
                card.appendChild(matchup)
                
            }
            schedule.appendChild(card)
        }}

grabLeagueButton.addEventListener('submit',() =>{
    axios.get(`http://localhost:4009/getleague/${grabLeagueInput.value}`)
            .then((res) =>{
                console.log(res)
                console.log('hello')
                
                // let {data} = response
                // processSchedule(response.data)
            })})