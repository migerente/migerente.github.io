import { Link } from "react-router-dom"
export default function NavButton(props) {
    return (
        <Link className="NavButton" to={props.path}>
            <img src={props.icon}/>
            {props.path}
        </Link>
    )
}