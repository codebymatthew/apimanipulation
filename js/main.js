
function generateCharacter() {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let hasImage = data.filter(n => n.image !== '')
        let rng = Math.floor(Math.random() * hasImage.length)
        console.log(rng)
        document.querySelector('#testImg').src = hasImage[rng].image
        document.querySelector('.charName').innerHTML = hasImage[rng].name
        document.querySelector('.patronus').innerText = hasImage[rng].patronus
        document.querySelector('.house').innerText = hasImage[rng].house

        
    })
    .then(err => {
        console.log(`error: ${err}`)
    })
}
generateCharacter()
let btn = document.querySelector('.randomBtn')
btn.addEventListener('click', generateCharacter)
