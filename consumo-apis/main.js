const container = document.querySelector('tbody')
// const container = document.querySelector('container')//-
constformulario = document.querySelector('form');

function cargarDatos() {
    fetch('https://67bb5e68fbe0387ca139e330.mockapi.io/users')
        .then(response => response.json())
        .then(data => {
            let datos = ''
            data.forEach(user => {
                let fecha = new Date(user.fecha)
                fecha = `${fecha.getDate}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
                datos += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.curso}</td>
                        <td>${fecha}</td>
                        <td><button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    `
            });
            container.innerHTML = datos
        })
        .catch(err => console.log(err));
};


function crearDatos() {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        data.fecha = Date.now()
        fetch('https://67bb5e68fbe0387ca139e330.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(cargarDatos)
        .catch(err => console.error(err));
    })
}

function main() {
    cargarDatos()
    //    crearDatos()
};

main();
