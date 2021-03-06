document.querySelector('.searchBtn').addEventListener('click', apiList)
document.querySelector('#searchInput').addEventListener('keydown', e => {
    if(e.keyCode == 13) {
        e.preventDefault()
        return apiList()
    }
})

function apiList() {
    let x = document.querySelector('.putStuffHere')
    x.innerHTML = ''
    let userSearch = document.querySelector('#searchInput').value
    fetch('https://api.publicapis.org/entries')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        let freeKey = data.entries.filter(n => n['Auth'] === '' && n['HTTPS'] === true)
        let searchedArray = freeKey.filter(n => n['API'].toLowerCase().includes(userSearch.toLowerCase()))
        // console.log(searchedArray)
        if (searchedArray.length !== 0){
            for(let e of searchedArray) {
            let pInsert = `<p class="infoLine"><span class="titles">Name:</span> ${e['API']} | <span class="titles">Category:</span> ${e['Category']} | <span class="titles">Description:</span> ${e['Description']} | <span class="titles">URL:</span> <a target="blank" href='${e['Link']}'>${e['Link']}<a></p>`
            document.querySelector('.putStuffHere').insertAdjacentHTML('beforeEnd', pInsert)
        }
    }
        else{
            x.innerHTML = '<h2>No Results Found, Please Try Again</h2>'
        }
    
    })
    .catch(err => {
        console.log(`error: ${err}`)
    })
}
let selector = document.querySelector('#categories')
function showErrThing() {
    fetch('https://api.publicapis.org/categories')
    .then(res => res.json())
    .then(data => {
        // console.log(data.categories.length)
        for (let i = 0; i < data.categories.length; i++) {
            let categoryHtml = `<option>${data.categories[i]}</option>`
            selector.insertAdjacentHTML('beforeend', categoryHtml)
        }
        // console.log(data)

    })
    .catch(err => {
        console.log(`ERROR: ${err}`)
    })
}
showErrThing()

document.querySelector('.btn2').addEventListener('click', resultFromCategory)
function resultFromCategory() {
    let x = document.querySelector('.putStuffHere')
    x.innerHTML = ''
    let categoryValue = document.querySelector('#categories').value
    // console.log(categoryValue)
    fetch('https://api.publicapis.org/entries')
    .then(res => res.json())
    .then(data => {

    let freeKey = data.entries.filter(n => n['Auth'] === '' && n['HTTPS'] === true && n['Category'] !== '')
    let selectedCategory = freeKey.filter(n => n['Category'].toLowerCase().includes(categoryValue.toLowerCase()))

    for(let e of selectedCategory) {
        
        let pInsert = `<p class="infoLine"><span class="titles">Name:</span>  ${e['API']} | <span class="titles">Description: </span> ${e['Description']} | <span class="titles"> URL:</span> <a target="blank" href='${e['Link']}'>${e['Link']}<a></p>`
        
        document.querySelector('.putStuffHere').insertAdjacentHTML('beforeEnd', pInsert)
        
    }
    // console.log(selectedCategory)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}