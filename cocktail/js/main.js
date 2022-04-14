document.querySelector('.searchBtn').addEventListener('click', searchForCocktail)
document.querySelector('.searchInput').addEventListener('keypress', e => {
    if(e.keyCode === 13) {
        e.preventDefault()
        return searchForCocktail()
    }
})

function searchForCocktail() {

    const searchInput = document.querySelector('.searchInput').value.toLowerCase()
    document.querySelector('.addFromApi').innerHTML = ''

    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            for(let d of data){
                let example = 
                `<section class="drinkSection">
                <p>${d.strDrink}</p> 
                <img src="${d.strDrinkThumb}" class=drinkImg> 
                <p>${d.strInstructions}</p> </section>`
                document.querySelector('.addFromApi').insertAdjacentHTML('beforeend', example)            }

        })
        .catch(err => {
            console.log(`error: ${err}`)
        })
}