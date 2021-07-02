import PropTypes from 'prop-types'


const Button = ({text,backgroundColor,onClick}) => {
    return (
        <button style = {{backgroundColor}} onClick = {onClick}>

           {text}
            
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button
