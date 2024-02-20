export default function CustomImputLabel(props) {
    return(
        <div className="col-8 mb-3">
        <label className="form-label" for={props.id}>{props.texto}</label>
        <input className="form-control" type="text"/>
    </div>
    )
    
}