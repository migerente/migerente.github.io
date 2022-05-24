import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import PanelInventario from './components/PanelInventario'
import PanelVentas from './components/PanelVentas'
import PanelReportes from './components/PanelReportes'

import {
	HashRouter,
	Routes,
	Route
} from "react-router-dom"

export default function App() {
	return (
		<>
			<HashRouter>
				<NavBar />
				<SideBar />
				<Routes>
					<Route path="/inventario"
						element={<PanelInventario/>}
					/>
					<Route path="/ventas"
						element={<PanelVentas/>}
					/>
					<Route path="/reportes"
						element={<PanelReportes/>}
					/>
				</Routes>
			</HashRouter>
		</>
	)
}
