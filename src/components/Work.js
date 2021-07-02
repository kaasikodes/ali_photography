// import NavList from './NavList'

import NavList from "./NavList"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import { useEffect} from 'react'


const Work = ({showImage, images,filterImagesToShow}) => {
    
    const links = [
        {   id: 1,
            name: 'all',
            path: '/work'
        },
        {   id: 1,
            name: 'potrait',
            path: '/work/potrait'
        },
        {   id: 1,
            name: 'showcase',
            path: '/work/showcase'
        },
        {   id: 1,
            name: 'wedding',
            path: '/work/wedding'
        },
        {   id: 1,
            name: 'nature',
            path: '/work/nature'
        },
    ]

    if(!images){
        return <h1 className = 'container work-container clear-top' style={{textAlign: 'center'}}>loading</h1>
    }
    
    return (
        <div className = 'container work-container clear-top'>

            <h2>Work</h2>
            <div className = 'work-nav'>
                <NavList links = {links} filterImagesToShow = {filterImagesToShow}/>
            </div>

            <div className = 'images-container'>
                
                {   
                    images.map((image)=>{
                        
                        return <LazyLoadImage
                                key = {image.id} className = "clean"
                                alt={image.alt_description}
                                effect = "black-and-white"
                                // height="500px"
                                src={image.urls.regular} // use normal <img> attributes as props
                                //  
                                style={{verticalAlign:'top'}}
                                /> 
                        

                    })
                }
            </div>

            
          
           
            
        </div>
    )
}

export default Work
