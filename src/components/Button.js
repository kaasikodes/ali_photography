import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa";

const Button = ({text,outline}) => {
    return (
        <Link to = {`/${text}`} className = {`btn ${outline && 'btn-outline'}`} >
            
            <FaTimes style = { {marginRight: '5px'} } />

           
            <span>{text}</span>
            
        </Link>
    )
}

Button.defaultProps = {
    outline: false
}
export default Button
