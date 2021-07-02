import React from 'react'

const PressRelease = ({image_url,title}) => {
    return (
        <div className= "press-release">
            <div className="press-img-container" style = {{backgroundImage: `url(${image_url})`}}>

            </div>
            <h4 className = "title">{title}</h4>
        </div>
    )
}

export default PressRelease
