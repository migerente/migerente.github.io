import { HashRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import App from './pages/App'
import Signup from './pages/Signup'
import PanelInventario from './components/PanelInventario'
import PanelVentas from './components/PanelVentas'
import PanelReportes from './components/PanelReportes'
import PanelEmpleados from './components/PanelEmpleados'

export default function Main() {
	return (
		<HashRouter>
			<Routes>
				<Route index element={<Landing />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="app" element={<App />}>
					<Route path="inventario" element={<PanelInventario />}/>
					<Route path="ventas" element={<PanelVentas />}/>
					<Route path="reportes" element={<PanelReportes />}/>
					<Route path="empleados" element={<PanelEmpleados />}/>
				</Route>
			</Routes>
		</HashRouter>
	)
}
