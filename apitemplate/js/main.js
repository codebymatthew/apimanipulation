function putNameHere() {
    fetch()
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .then(err => {
        console.log(`error: ${err}`)
    })
}
putNameHere()