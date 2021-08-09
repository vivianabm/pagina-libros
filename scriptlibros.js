const list_url = "https://vivianabm.github.io/pagina-libros/listado.json";
function cargarDatos(url) {
    document.getElementById("data").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())
.then(datos => {
           for (let i = 0; i < datos.length; i++) {
              
                let row = "";
                row=`
                <tr>
                <td>`+ datos[i].titulo + `</td>
                <td>`+ datos[i].autor + `</td>
                <td>`+ datos[i].editorial + `</td>
                <td>`+ datos[i].categoria + `</td>
                </tr>
                `;
                document.getElementById("data").innerHTML += row;
            }
          

        })
        .catch(error => alert("Hubo un error: " + error));
}