// USING class based components
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({name,showForm, showTaskFormBtn}) => {
    return (
        <header className = 'header'>
           <h1>Task Tracker</h1>
           <Button text = {showTaskFormBtn ? 'Close' : name} backgroundColor = {showTaskFormBtn ? 'red' : 'green'} onClick = {showForm}/>
            
        </header>
    )
}

Header.defaultProps = {
    name: 'Add'
}

Header.propTypes = {
    name: PropTypes.string,
    // use isRequired
}

// const HeaderStyles = {
//     color: '#fff',
//     backgroundColor: '#1b1b1b',
//     padding: '20px'
// }

export default Header
