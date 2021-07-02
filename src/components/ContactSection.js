import { FaTimes } from "react-icons/fa";

const ContactSection = () => {
    return (
        <div className='contact-container'>
              <div className = 'contact-section'>
                  <h4>Get in Touch</h4>
                  <ul>
                      <li>
                          <a href = 'https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/'>
                            <FaTimes style = { {marginRight: '5px'} } />
                            <span>08134087135</span>
                          </a>
                      </li>
                      <li>
                          <a href = 'https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/'>
                            <FaTimes style = { {marginRight: '5px'} } />
                            <span>08134087135</span>
                          </a>
                      </li>
                      <li>
                          <a href = 'https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/'>
                            <FaTimes style = { {marginRight: '5px'} } />
                            <span>08134087135</span>
                          </a>
                      </li>
                  </ul>
              </div>
              <div className = 'contact-section'>
                  <h4>Socials</h4>
                  <ul>
                      <li>
                          <a href = 'https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/'>
                            <FaTimes style = { {marginRight: '5px'} } />
                            <span>ali_dahiru</span>
                          </a>
                      </li>
                      <li>
                          <a href = 'https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/'>
                            <FaTimes style = { {marginRight: '5px'} } />
                            <span>ali_dahiru</span>
                          </a>
                      </li>
                      <li>
                          <a href = 'https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/'>
                            <FaTimes style = { {marginRight: '5px'} } />
                            <span>ali_dahiru</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>  
    )
}

export default ContactSection
