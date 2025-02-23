// http://www.omdbapi.com/?t=men&y=2005

async function searchMovies(nameMovie) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${key}&type=movie&s=${nameMovie}`)
        console.log(response)
        if (response.ok) {
            const movies = await response.json();
            return movies
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
searchMovies('Men')
    .then(data => console.log(data))
    .catch(error => console.error(error.message))