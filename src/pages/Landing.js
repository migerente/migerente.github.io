import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar'
import logo from '../assets/logo.svg'
import './landing.css'

export default function Landing() {
    return (
        <>
            <NavBar>
                <div className="login-signup-buttons">
                    <Link className="login button" to="/login">
                        iniciar sesión
                    </Link>
                    <Link className="signup button" to="/signup">
                        registrarse
                    </Link>
                </div>
            </NavBar>
            <div className="container">
                <img src={logo} height="400" width="400"/>
                <h3>
                    LANDING PAGE
                </h3>
            </div>
        </>
    )
}