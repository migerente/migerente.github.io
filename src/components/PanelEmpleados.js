import { useState, useEffect } from 'react'
import Panel from './Panel'
export default function PanelEmpleados() {

    useEffect(() => {
        console.log('hola mundillo')
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
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
                        1 === 1 ?
                            <tr>
                                <td></td><td></td><td></td>
                            </tr>
                            : false
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