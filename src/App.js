import React from 'react'
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './css/style.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Work from './components/Work'
import About from './components/About'
import Press from './components/Press'
import ShowSingleImage from './components/ShowSingleImage'
import Contact from './components/Contact';






const App = () => {
 

  
  
  const [carouselItems, setCarouselItems] = useState([]);
  const carouselUrl = "https://api.unsplash.com/photos?client_id=ZTsqFmNiVHmuOqYKHnAWUG6b6hel5wGJqSgoejSGX-w&count=15";
  const baseCategoryUrl = "https://api.unsplash.com/search/photos?client_id=ZTsqFmNiVHmuOqYKHnAWUG6b6hel5wGJqSgoejSGX-w&per_page=12&query="
  const fetchImages = async(currentUrl)=>{
    const res =  await fetch(currentUrl)
    const data = await res.json()
    console.log('the result',data)
    return data
    

  }
  useEffect(()=>{
    const getImages = async ()=>{
      const imagesFromServer = await fetchImages(carouselUrl)
      console.log('problem',imagesFromServer)
      setCarouselItems(() =>imagesFromServer)
    }

    getImages()


  },[carouselItems])
  const [categoryImages,setCategoryImages] = useState([])// want to set it only once
  const [currentImageToBeShown, setcurrentImageToBeShown] = useState('')
  const [showImageStatus, setshowImageStatus] = useState(false)
  
  const filterImagesToShow = async (categoryName)=>{
    const currentCategoryUrl = baseCategoryUrl + categoryName;
    const imagesFromServer = await fetchImages(currentCategoryUrl);
    const result = await imagesFromServer.results
    
    setCategoryImages(result)
    
    
  }
  
  // console.log('wher is the problem',carouselItems.filter((image)=>image.id === "vHPWvMAKGj0")[0])
  const showImage = (id) =>{
    
    setcurrentImageToBeShown(() =>carouselItems.filter((image)=>image.id === id)[0])
    setshowImageStatus(true)
    
  
  }
  
  return (
    <Router>
    

      <div className = "web-wrapper">
        {
            
              (carouselItems.length > 0 && showImageStatus) && <ShowSingleImage 

              showImageStatus = {showImageStatus} 
              currentImageToBeShown = {currentImageToBeShown} 
              setshowImageStatus = {setshowImageStatus}

              />
            
        }
        <Nav/>
          <Route path ='/' exact render= {() => {
            return <Home  showImage = {showImage} carouselItems = {carouselItems}/>
          }}/>


          <Route path ='/work' render= {() => {
            return <Work  showImage = {showImage} images = {categoryImages} filterImagesToShow = {filterImagesToShow}/>
          }}/>
          
          <Route path ='/about' exact render= {() => {
            return <About avatar = {carouselItems}/>
          }}/>

          <Route path ='/press' exact render= {() => {
            return <Press images =  {carouselItems} />
          }}/>

          <Route path ='/contact' exact render= {() => {
            return <Contact/>
          }}/>
          
      </div>




    </Router>
    
  )
}

export default App
