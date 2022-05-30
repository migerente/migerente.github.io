import { useNavigate } from "react-router-dom"
import NavBar from '../components/NavBar'
import './signup.css'

export default function Signup() {
    const API = 'https://boiling-shore-03942.herokuapp.com'
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const contra1 = document.getElementById('contrasena').value
        const contra2 = document.getElementById('verificar-contrasena').value
        if (contra1 !== contra2) {
            alert('Error: las contraseñas no coinciden')
            return
        }
        fetch(`${API}/perfil`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre: document.getElementById('nombres').value,
                apellido: document.getElementById('apellidos').value,
                correo: document.getElementById('correo').value,
                contra: document.getElementById('contrasena').value,
                nombre_nego: document.getElementById('nombre-empresa').value,
                perfil: 1,
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                alert('usuario creado correctamente')
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <NavBar />
            <h3 className="title">Registrar nuevo usuario</h3>
            <form onSubmit={handleSubmit} className="form-signup">
                <div className="form-group">
                    <label htmlFor="nombre-empresa">Nombre de la empresa:</label><br />
                    <input id="nombre-empresa" name="nombre-empresa" required /><br />
                </div>
                <div className="form-group">
                    <label htmlFor="nombres">Nombres:</label><br />
                    <input id="nombres" name="nombres" required /><br />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos:</label><br />
                    <input id="apellidos" name="apellidos" required /><br />
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo electrónico:</label><br />
                    <input type="email" id="correo" name="correo" required />
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Contraseña:</label><br />
                    <input type="password" id="contrasena" name="contrasena" required />
                </div>
                <div className="form-group">
                    <label htmlFor="correo">verificar contraseña:</label><br />
                    <input type="password" id="verificar-contrasena" name="verificar-contrasena" required />
                </div>
                <button type="submit">registrar</button>
            </form>
        </>
    )
}