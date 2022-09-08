const form = document.querySelector('form')

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

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const postobj = {
        Team1: team1.value,
        Team2: team2.value,
    }
    axios.post('http://localhost:4009/saveleague', postobj)
});


//Get all team input boxes
//Get submit button on click event listener that does axios.post request (url, body).then
//Handle response data object
//Generate card per week with the data, then append that to where it will be stored on the html page