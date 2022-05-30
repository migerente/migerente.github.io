import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import Panel from './Panel'
export default function PanelEmpleados() {
    const API = 'https://boiling-shore-03942.herokuapp.com'
    const cookies = new Cookies()
    const [empleados, setEmpleados] = useState([])
    useEffect(() => {
        fetch(`${API}/empleados`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                empresa: cookies.get('companyName'),
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setEmpleados(json)
            })
            .catch(err => console.log(err))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`${API}/perfil`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre: document.getElementById('nombres').value,
                apellido: document.getElementById('apellidos').value,
                correo: document.getElementById('correo').value,
                contra: 'empleado',
                nombre_nego: cookies.get('companyName'),
                perfil: 2,
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                alert('empleado registrado correctamente')
            })
            .catch(err => console.log(err))
    }

    return (
        <Panel className="panel-empleados">
            <h3>Detalles de los empleados</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Correo electrónico</th>
                    </tr>
                </thead>
                <tbody>
                    { // para mostrar una fila vacia cuando no hay datos
                        empleados.length == 0 ?
                            <tr>
                                <td></td><td></td><td></td>
                            </tr>
                            : false
                    }
                    {
                        empleados.map((empleado) => (
                            <tr>
                                <td>{empleado[0]}</td>
                                <td>{empleado[1]}</td>
                                <td>{empleado[2]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h3>Registrar empleados</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombres">Nombres:</label><br />
                    <input id="nombres" name="nombres" /><br />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos:</label><br />
                    <input id="apellidos" name="apellidos" /><br />
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo electrónico:</label><br />
                    <input type="email" id="correo" name="correo" />
                </div>
                <button type="submit">registrar</button>
            </form>
        </Panel>
    )
}