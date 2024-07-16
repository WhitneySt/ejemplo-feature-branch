function listaProductos(productos, contenedor) {
    contenedor.innerHTML = "";
    productos.forEach(element => {
        const cards = document.createElement("article");
        const imagen = document.createElement("img");
        const h2 = document.createElement("h2");

        imagen.setAttribute("src", element.imagen);
        h2.textContent = element.nombre
        cards.appendChild(imagen);
        cards.appendChild(h2);

        contenedor.appendChild(cards)

    });
}

const productos = [
    {
        nombre: "manzana",
        imagen: "https://i0.wp.com/www.buenmercadoacasa.com/blog/wp-content/uploads/2018/05/variedades-de-manzanas-buenmercadoacasa-portada.jpg?fit=2880%2C1800&ssl=1"
    },
    {
        nombre: "uvas",
        imagen: "https://cdn.trt.net.tr/images/xlarge/rectangle/2d02/b587/db91/5dc3f6e5883c0.jpg?time=1720977874"
    }
];

const contenedorProductos = document.getElementById("contenedor");

listaProductos(productos, contenedorProductos)