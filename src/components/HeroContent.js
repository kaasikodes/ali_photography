import Button from './Button'

const HeroContent = ({text}) => {
    return (
        <div style = {{position: 'relative'}} >
            <div className = 'content' style = {{position: 'fixed', top: '50px'}}>
                <h1>{text}</h1>

                <div className = 'btns'>
                    <Button text = 'work'/>
                    <Button text = 'contact' outline = {true}/>
                </div>
                
                

                
            </div>

        </div>
        
    )
}



export default HeroContent
