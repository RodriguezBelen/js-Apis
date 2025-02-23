const container = document.querySelector('.container')

container.innerHTML = 'Hola Mundo'

fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(data => {
        let datos = ''
        data.results.forEach(element => {
            console.log(element.name)
            datos += `<h3>${element.name}</h3>`
        })
        container.innerHTML = datos
    })
    .catch(err => console.error(err))
