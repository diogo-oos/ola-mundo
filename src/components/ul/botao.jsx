export const Botao = ({children, onClick}) => {
    return (
        <div className="area-btn">
            <button onClick={onClick} className="btn">{children}</button>
        </div>
    )
}