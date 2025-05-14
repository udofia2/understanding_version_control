export const Button = (props) => {
    return(
        <button className="form-button">
        {props.icon && <img src={props.icon} alt=""/> }
        {props.label}
    </button>
    )
   
}