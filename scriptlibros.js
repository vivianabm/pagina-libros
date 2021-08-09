const list_url = "https://vivianabm.github.io/pagina-libros/listado.json";
function cargarDatos(url) {
    document.getElementById("data").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())
.then(listado => {
           for (let i = 0; i < listado.length; i++) {
              
                let row = "";
                row=`
                <tr>
                <td>`+ listado[i].titulo + `</td>
                <td>`+ listado[i].autor + `</td>
                <td>`+ listado[i].editorial + `</td>
                <td>`+ listado[i].categoria + `</td>
                </tr>
                `;
                document.getElementById("data").innerHTML += row;
            }
          

        })
        .catch(error => alert("Hubo un error: " + error));
}