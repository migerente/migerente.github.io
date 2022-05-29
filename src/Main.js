import SideBar from './components/SideBar'
import PanelInventario from './components/PanelInventario'
import PanelVentas from './components/PanelVentas'
import PanelReportes from './components/PanelReportes'
import Landing from './pages/Landing'
import Login from './pages/Login'
import App from './pages/App'
import Signup from './pages/Signup'
import {
	HashRouter,
	Routes,
	Route
} from 'react-router-dom'

export default function Main() {
	return (
		<HashRouter>
			<Routes>
				<Route index element={<Landing/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/app" element={<App/>}/>
				<Route path="/signup" element={<Signup/>}/>
			</Routes>
			{/* <NavBar />
			<SideBar />
			<Routes>
				<Route path="/inventario"
					element={<PanelInventario />}
				/>
				<Route path="/ventas"
					element={<PanelVentas />}
				/>
				<Route path="/reportes"
					element={<PanelReportes />}
				/>
			</Routes> */}
		</HashRouter>
	)
}
