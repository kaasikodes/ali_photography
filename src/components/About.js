
import ContactSection from "./ContactSection";
const About = ({avatar}) => {
    const url = avatar[0]?.urls?.regular; // fix this problem
    const styles = {
        backgroundImage:`url(${url})`
    }
    return (
        <div className = 'container contact about-container clear-top'>
          <h2>About</h2>
          <div className = 'content'>
              <div className = 'text-container'>
                  <p>This is ali bomaye</p>
              </div>
              <div className = 'img-container' style={styles}>
                  
              </div>
          </div>

          <ContactSection/>
          
        </div>
    )
}

export default About
