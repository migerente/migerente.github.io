import NavButton from './NavButton'
import logoInventario from '../assets/stock.svg';
import logoVentas from '../assets/buy.svg';
import logoReportes from '../assets/history.svg';

export default function SideBar() {
    return (
        <div className="SideBar">
            <NavButton path="inventario" content="inventario"
                icon={logoInventario}
            />
            <NavButton path="ventas" content="ventas"
                icon={logoVentas}
            />
            <NavButton path="reportes" content="reportes"
                icon={logoReportes}
            />
        </div>
    )
}