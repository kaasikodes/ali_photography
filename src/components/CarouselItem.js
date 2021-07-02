import React from 'react'


const CarouselItem = ({image,showImage}) => {
    const url  = image.urls.regular;
    console.log('th',url)
    const styles = {
        backgroundImage:`url(${url})`
    
    }
    return (
        <div className = 'carousel-item' onClick = { ()=>showImage(image.id) } style = {styles}>
                            

        </div>
    )
}




export default CarouselItem
