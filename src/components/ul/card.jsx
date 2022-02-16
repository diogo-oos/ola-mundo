export const Card = (props) => {
    return (
        <div key={props.key} className="col-12 col-sm-6 col-md-4">
            <div className="card">
                <img className="img-fluid" src={props.image} alt={props.name} title={props.name} />
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}