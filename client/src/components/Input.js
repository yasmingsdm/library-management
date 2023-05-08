import './Input.css'
const Input = (props)=>{
    return(
        <div className="input">
            <label htmlFor={props.name}>{props.name}: </label>
            <input {...props} />
        </div>
    )
}

export default Input