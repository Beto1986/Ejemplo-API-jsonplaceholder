const apiURL = 'http://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    // Verifica que se haya completado la operacion(readyState) y la respuesta(status) sea correcta.
    if (this.readyState === 4 && this.status === 200) {
        // Códigos de readyState --> 
        // 0 --> UNSET --> no se ha llamado al metodo open.
        // 1 --> OPENED --> se ha llamado al metodo open.
        // 2 --> HEADERS_RECEIVED --> se está llamando al metodo send()
        // 3 --> LOADING --> esta cargando, es decir , esta recibiendo la respuesta
        // 4 --> DONDE --> se ha completado la operacion
        //console.log(this.response);
        const data = JSON.parse(this.response);
        console.log(data);

        // Inicio Una forma (con map)
        //const HTMLresponse = document.querySelector("#app");
        // // Iteramos esos datos.
        // const tpl = data.map(user => `<li>${user.name} ${user.email}</li>`)

        // // Llamo al div para insertar los usuarios.
        // HTMLresponse.innerHTML = `<ul>${tpl}</ul>`
        // Fin Una forma (con map)

        // Inicio Otra forma (con un for each)
        const HTMLresponse = document.querySelector("#app");
        const ul = document.createElement('ul');

        data.forEach(user => {
            let element = document.createElement('li');
            element.appendChild(document.createTextNode(`${user.name} ${user.email}`));
            ul.appendChild(element);
        });

        HTMLresponse.appendChild(ul);
        // Inicio Otra forma (con un for each)

    }

}

xhr.addEventListener("load", onRequestHandler); // Hasta acá esta en estado 0.
xhr.open("GET", `${apiURL}/users`); // Activa el estado 1
xhr.send(); // Envía la peticion , pasando por los estados 2 , 3 y 4.