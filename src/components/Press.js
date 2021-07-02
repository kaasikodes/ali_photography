

import PressRelease from "./PressRelease";

const Press = ({images}) => {
    return (
        <div className = 'container press about-container clear-top'>
            <h2>Press</h2>

            <div className = "press-releases">
                <PressRelease title = "Vogue" image_url = {images[0]?.urls?.regular}/>
                <PressRelease title = "Nike" image_url = {images[1]?.urls?.regular}/>
                <PressRelease title = "Gucci" image_url = {images[3]?.urls?.regular}/>
                <PressRelease title = "This Day" image_url = {images[2]?.urls?.regular}/>


            </div>

            
            
        </div>
    )
}

export default Press
