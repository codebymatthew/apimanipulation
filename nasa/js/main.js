document.querySelector('.hereBtn').addEventListener('click', nasa)
function nasa() {

    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9il9hpVqRI58BJDKtnNguStxxs8jT46k6UNg2JjH`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        document.querySelector('.hereimg').src = data.photos[Math.ceil(Math.random () * data.photos.length)]['img_src']
    })
    .then(err => {
        console.log(`error: ${err}`)
    })
}