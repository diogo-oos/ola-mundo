export const Input = (props) => {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={props.id}>{props.title}</label>
            <input type={props.type} id={props.id} name={props.name} />
        </div>
    )
}