import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa";

const ShowSingleImage = ({showImageStatus,currentImageToBeShown,setshowImageStatus}) => {
  console.log('cis',currentImageToBeShown);
    return (
      
        <div className = {`web-wrapper img-box-wrapper ${showImageStatus && 'active'}`}>
        <div className = 'container img-box'>
          <div className = 'img-nav'>
          
            <div className = 'category-btn'>
              <Link to ={ `/work/${currentImageToBeShown.categories[0]}` } style = {{textTransform: 'capitalize'}}>View {currentImageToBeShown.categories[0]}</Link>
            </div>
           
            <div className = 'close-btn' onClick = {()=> setshowImageStatus(false)}>
              <FaTimes/>
            </div>
          </div>

          <div className = 'img-container-wrapper'>
            <div className = 'img-container'>
              <img src={currentImageToBeShown.urls.regular} alt = ''/>

            </div>

          </div>

        </div>

      </div>
    )
}

export default ShowSingleImage
