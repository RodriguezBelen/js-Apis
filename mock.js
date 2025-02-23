const container = document.querySelector('.container')

fetch('https://67bb5e68fbe0387ca139e330.mockapi.io/productos')
    .then(response => response.json)
    .then(data => {
        let datos = ''
        data.forEach(element => {
            datos += `<div>
        <h2>${element.name}</h2>
        <h2>${element.quantity}</h2>
        <img src="${element.avatar}" alt="${element.name}" width= "100">
    </div>`

        })
        container.innerHTML = datos
    })
    .catch(err => console.log(err))
