import NavButton from './NavButton'
import logoInventario from '../assets/stock.svg';
import logoVentas from '../assets/buy.svg';
import logoReportes from '../assets/history.svg';
import logoEmpleados from '../assets/employees.svg';

export default function SideBar() {
    return (
        <div className="SideBar">
            <NavButton path="inventario" icon={logoInventario} />
            <NavButton path="ventas" icon={logoVentas} />
            <NavButton path="reportes" icon={logoReportes} />
            <NavButton path="empleados" icon={logoEmpleados} />
        </div>
    )
}