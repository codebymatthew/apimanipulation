
document.querySelector('#randomBtn').addEventListener('click', randomPlanet)
function randomPlanet(){
    const randomPage = Math.ceil(Math.random() * 5)
    fetch('https://swapi.dev/api/planets/?page=' + randomPage)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let randomPlanetSelector = Math.floor(Math.random() * 9)
            console.log(data.results[randomPlanetSelector])
            
            document.querySelector('#planetName').innerText = 'Planet Name: ' + data.results[randomPlanetSelector].name

            document.querySelector('#climate').innerText = 'Climate: ' + data.results[randomPlanetSelector].climate

            document.querySelector('#population').innerText = 'population: ' + data.results[randomPlanetSelector].population

            document.querySelector('#gravity').innerText = 'gravity: ' + data.results[randomPlanetSelector].gravity
            terrain
            document.querySelector('#terrain').innerText = 'terrain: ' + data.results[randomPlanetSelector].terrain
                
            document.querySelector('#rotationPeriod').innerText = 'rotation period: ' + data.results[randomPlanetSelector].rotation_period
                // fetch('https://swapi.dev/api/planets/?page=' + randomPage + '/people') 
                //     .then(res => res.json())
                //     .then(resNames => {
                //         console.log(resNames)
                //     })
                //     .then(err => {
                //         console.log(`error2: ${err}`)
                //     })
            // let nameArray = data.results[randomPlanetSelector].residents
            // console.log(nameArray)
            // document.querySelector('#residents').innerText = 'residents: ' + data.results[randomPlanetSelector].residents


    })
        .then(err => {
            console.log(`error: ${err}`)
    })  

}

























































// let pushMe = document.querySelector('button')
// pushMe.addEventListener('click', doTheThing)
// function doTheThing() {
// fetch('https://acnhapi.com/v1/art/')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         let art = document.querySelector('input').value
//         // console.log(data.amazing_painting['file-name'])
//         for(let i = 1; i < 43; i++) {
//             if(art === data.art['file-name']){
//                 let artID = data.art.id
//                 console.log(artID)
//             }
//             else {
//                 console.log('ERROR')
//             }
//         }
//     })
//     .then(err => {
//         console.log(`error: ${err}`)
//     })
// }