export const Input = (props) => {

    const handleChange = (event) => {
        const value = event.target.value
        
        props.setValues((VALOR_ANTERIOR) =>({
            ...VALOR_ANTERIOR,
            [props.name]: value
        }))

        /*function adicionarClasseFloatLon() {
            eidLon.classList.add('float');
        }

        function removerClasseFloatLon() {
            eidLon.classList.remove('float');
            verificarValor()
        }

        function adicionarClasseFloatLat() {
            eidLat.classList.add('float');
        }

        function removerClasseFloatLat() {
            eidLat.classList.remove('float');
            verificarValor()
        }*/
    }
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={props.id}>{props.title}</label>
            <input type={props.type} onChange={handleChange} id={props.id} name={props.name} defaultValue={props.value} />
        </div>
    )
}