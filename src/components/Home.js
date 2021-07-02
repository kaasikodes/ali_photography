import HeroContent from './HeroContent'
import HeroCarousel from './HeroCarousel'



const Home = ({showImage, carouselItems}) => {
    return (
        <div className = 'container home-container'>
            <HeroContent text = {`Photos that make every moment memorable`}/>

            <HeroCarousel showImage = {showImage} carouselItems = {carouselItems}/>
            {console.log(carouselItems)}
           
            
        </div>
    )
}

export default Home
