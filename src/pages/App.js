import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

export default function App() {

    const cookies = new Cookies()
    const navigate = useNavigate()
    if (cookies.get('loggedIn') == 'no' || cookies.get('loggedIn') == undefined)
        return <Navigate to='/login' />

    function handleClick() {
        if (window.confirm('esta seguro de querer cerrar la sesión actual?')) {
            cookies.set('loggedIn', 'no')
            cookies.set('userType', '')
            navigate('/login')
        }
    }

    return (
        <>
            <NavBar>
                <div className="login-signup-buttons">
                    <button className="button" onClick={handleClick}>
                        cerrar sesión
                    </button>
                </div>
            </NavBar>
            <SideBar />
            <Outlet />
        </>
    )
}