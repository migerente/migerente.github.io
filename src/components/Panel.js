export default function Panel(props) {
    return (
        <div className={`Panel ${props.className}`}>
            {props.children}
        </div>
    )
}