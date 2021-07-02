import CarouselItem from './CarouselItem'

const HeroCarousel = ({carouselItems,showImage}) => {
    return (
        
        <div className = 'carousel-container'>
            <div className = 'carousel-items'>
                {
                    carouselItems.map((image) => {
                        return <CarouselItem key = {image.id} image={image} showImage = {showImage}/>
                    })
                    
                }

                {console.log(carouselItems)}

            </div>
            
            
        </div>
    )
}

export default HeroCarousel
