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
            cookies.remove('loggedIn')
            cookies.remove('userType')
            cookies.remove('companyName')
            navigate('/login')
        }
    }

    return (
        <>
            <NavBar>
                <h2 className="company-name">{cookies.get('companyName')}</h2>
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