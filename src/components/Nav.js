import { Link } from 'react-router-dom'

import NavList from './NavList'




const Nav = () => {
    
    
    const links = [
        {
            name: 'work',
            path: '/work'
        },
        {
            name: 'press',
            path: '/press'
        },
        {
            name: 'print',
            path: '/print'
        },
        {
            name: 'about',
            path: '/about'
        },
        {
            name: 'contact',
            path: '/contact'
        },
    ]
    return (
        <div style = {{position: 'relative'}} className = 'container'>
            <div className = "nav-container" style = {{position: 'fixed', zIndex: 200}}>
            
                <Link to = '/' className = "logo">Ali Dahiru</Link>
                <NavList links = {links}/>
                
            </div>
        </div>
    )
}



export default Nav
