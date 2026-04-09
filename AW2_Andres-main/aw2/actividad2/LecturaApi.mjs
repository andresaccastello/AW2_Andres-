export async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://api.escuelajs.co/api/v1/users');
        const usuarios = await respuesta.json();
        return usuarios;
    } catch (e) {
        console.log(e);
    }
}