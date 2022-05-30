import Cookies from 'universal-cookie'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import logo from '../assets/logo.svg'
import './login.css'

export default function Login() {
    const API = 'https://boiling-shore-03942.herokuapp.com'
    const cookies = new Cookies()
    const navigate = useNavigate()
    if (cookies.get('loggedIn') === 'yes')
        return <Navigate to="/app" />

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`${API}/userlog`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                usuario: document.getElementById('correo').value,
                contrasena: document.getElementById('contrasena').value,
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                if (json[0]['correcto']) {
                    cookies.set('loggedIn', 'yes')
                    cookies.set('userType', json[0]['perfil'])
                    navigate('/app')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <NavBar />
            <div className="login-box">
                <img src={logo} height="100" width="100" />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="correo">Correo electrónico:</label><br />
                        <input type="email" id="correo" name="correo" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellidos">Contraseña:</label><br />
                        <input type="password" id="contrasena" name="contrasena" required /><br />
                    </div>
                    <button type="submit">iniciar sesión</button>
                    <p className="registrese-aqui">
                        No tiene cuenta? &nbsp;
                        <Link to="/signup">
                            Regístrese aquí
                        </Link>
                    </p>
                </form>
            </div>
        </>
    )
}