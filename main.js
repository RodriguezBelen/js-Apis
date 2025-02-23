import{key} from "./key.js"

const formulario = document.querySelector('form')
const container = document.querySelector('.container')

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()

    const data = Object.fromEntries(new FormData(evento.target))
    fetch(`https://www.omdbapi.com/?apikey=${key}&type=movie&s=${data.buscar}`)
        .then(response => response.json())
        .then(datos => {
            let datosParseados = ''
            datos.Search.forEach(movie => {
                datosParseados += `<div>
                                       <h3>${movie.Title}</h3>
                                       <h4>${movie.Year}</h4>
                                       <img src="${movie.Poster}" alt="${movie.Title}">
                                   </div>`

            })
            container.innerHTML = datosParseados
        })
        .catch(err => console.error(err))
})