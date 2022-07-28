var eliminar_btn = document.querySelectorAll(".eliminar");

eliminar_btn.forEach(btn => {
    btn.addEventListener("click", function(){
        let contenedor = btn.parentNode;
        let div_contenedor = contenedor.parentNode;
        div_contenedor.remove();
        eliminar_btn();
    })
})

function eliminar(){
    var productos_actuales = localStorage.getItem("productos_actuales");
    console.log(productos_actuales);
    for (let i = 0; i < productos_actuales.length; i++){
        console.log(productos_actuales[i]);
    }
}


