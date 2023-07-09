import { useState } from 'react';
import './about.css';

const About = ({children}) =>{
    const [readmore, setreadmore] = useState(false);

    const clickHandler = () =>{
        setreadmore(prev=>!prev)
    }
    return(
             
        <div className='abt'>
             <div>
                <img  src='image1.jpeg' alt='not found'/>
            </div>
            <div className='text'>
            <h1>About Us</h1>
                {readmore? children : children
                .substr(0,130)};

                <button type='button' onClick={clickHandler}>Read More</button>
               
            </div>
        </div>
       
    )
}
export default About;