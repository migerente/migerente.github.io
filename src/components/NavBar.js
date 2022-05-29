import {Link} from 'react-router-dom'

export default function NavBar(props) {
    return (
        <div className="NavBar">
            <Link to="/">miGerente</Link>
            {props.children}
        </div>
    )
}