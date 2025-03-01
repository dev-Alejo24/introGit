function registrarUsuario(nombre, email, contraseña) {
    if (!nombre || !email || !contraseña) {
        console.error("Todos los campos son obligatorios.");
        return;
    }

    const usuario = {
        nombre: nombre,
        email: email,
        contraseña: contraseña
    };

    console.log("Usuario registrado:", usuario);
}

// Llamada a la función
registrarUsuario("Juan Pérez", "juan@example.com", "miContraseña");