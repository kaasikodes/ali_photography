import { Link,useLocation } from 'react-router-dom'
// import {useEffect} from 'react'


const NavList = ({links, filterImagesToShow}) => {
    const location = useLocation();
   
    
    return (
        <ul className = 'nav-links'>

                    {links.map((link,index)=>{
                        return <li key = {index} className = {`nav-link ${location.pathname === link.path && 'active'}`}>
                                    <Link to = {link.path} onClick = {()=>filterImagesToShow(link.name)}>{link.name}</Link>
                                </li>
                    })}

                    
                    
                
            
                </ul>
    )
}

NavList.defaultProps = {
    filterImagesToShow: () =>{console.log('we de here')}
}

export default NavList
