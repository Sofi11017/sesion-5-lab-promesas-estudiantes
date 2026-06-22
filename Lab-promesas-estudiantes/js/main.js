console.log("=== INICIO DEL LABORATORIO ===");

async function cargarEmpleados() {

    try {
        const respuesta = await fetch("data/empleados.json");

        const datos = await respuesta.json();

        console.log("Lista de empleados:");
        console.table(datos.empleados);

        datos.empleados.forEach(empleado => {

            console.log(
                `Empleado: ${empleado.nombre} ${empleado.apellido} - Cargo: ${empleado.cargo} - Área: ${empleado.area}`
            );

        });

    } catch (error) {

        console.error("Error al cargar empleados:", error);

    }

}

async function cargarProductos() {

    try {

        const respuesta = await fetch("data/productos.json");

        const datos = await respuesta.json();

        console.log("Lista de productos:");
        console.table(datos.productos);

        datos.productos.forEach(producto => {

            let estado;

            if (producto.stock > 0) {
                estado = "Disponible";
            } else {
                estado = "Agotado";
            }

            console.log(
                `Producto: ${producto.nombre} - Categoría: ${producto.categoria} - Precio: $${producto.precio} - Stock: ${producto.stock} - ${estado}`
            );

        });

    } catch (error) {

        console.error("Error al cargar productos:", error);

    }

}

async function cargarTodo() {

    try {

        const respuestas = await Promise.all([
        fetch("data/empleados.json"),
        fetch("data/productos.json")
        ]);

        const empleados = await respuestas[0].json();
        const productos = await respuestas[1].json();

        console.log(
            `Se cargaron ${empleados.empleados.length} empleados`
        );

        console.log(
            `Se cargaron ${productos.productos.length} productos`
        );

    } catch (error) {

        console.error("Error al cargar todos los archivos:", error);

    }

}

cargarEmpleados();

cargarProductos();

cargarTodo();