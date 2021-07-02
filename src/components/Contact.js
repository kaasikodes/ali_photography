import ContactSection from "./ContactSection"

const Contact = () => {
    const buttonStyles = {
        padding: '10px 20px',
        backgroundColor: `rgba(255, 255, 75, 0.948)`,
        color: 'black',
        outline: 'none',
        border: 'none',
        width: 'fit-content',
        alignSelf: 'flex-start',
        fontWeight: 500
    }
    return (
        <div className = 'container contact about-container clear-top'>
            <h2>Contact</h2>

            <div className= "main-contact-content">
                <form>
                    <input type="text" name="name" id="" placeholder="Name"/>
                    <input type="email" name="email" id="" placeholder="Email"/>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea name="messsage" id="" cols="30" rows="10"></textarea>
                    </div>

                    <button style = {buttonStyles}>Send</button>

                </form>


                <ContactSection/>
                
            </div>
            
        </div>
    )
}

export default Contact
