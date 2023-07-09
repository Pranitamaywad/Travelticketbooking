import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () =>{
    return(
        <div>
            <div className='up-end'>
                <h1>Upto 50% off</h1>
                <p>  Writing block can often happen due to being stuck with a current project that the writer is trying to complete.</p>
                <Link to="/book">Book Now</Link>
            </div>
            <div className='end'>
                <h1></h1>
            </div>
        </div>
    )
}
export default Footer;