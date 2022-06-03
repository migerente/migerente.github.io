import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react';
import NavButton from './NavButton'
import logoInventario from '../assets/stock.svg';
import logoVentas from '../assets/buy.svg';
import logoReportes from '../assets/history.svg';
import logoEmpleados from '../assets/employees.svg';

export default function SideBar() {
    const [userType, setUserType] = useState(0)
    const cookies = new Cookies()
    useEffect(() => {
        setUserType(cookies.get('userType'))
    }, [])
    return (
        <div className="SideBar">
            <NavButton path="inventario" icon={logoInventario} />
            <NavButton path="ventas" icon={logoVentas} />
            <NavButton path="reportes" icon={logoReportes} />
            {
                userType == 1 ?
                    <NavButton path="empleados" icon={logoEmpleados} />
                    : false
            }
        </div>
    )
}