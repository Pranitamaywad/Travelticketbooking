import { Link } from "react-router-dom";
import "./package.css";

const Package =() =>{
    return(
        <div className="packages">
            <h1 className="handle-title">OUR PACKAGES</h1>
            <div className="box-container">
                <div>
                    <div className="box">
                    <div className="image"><img src="img1.jpeg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                    </div>

                     <div className="box">
                    <div className="image"><img src="img2.jpeg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                     </div>

                    <div className="box">
                    <div className="image"><img src="img3.jpg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                    </div>
                </div>

                 <div>
                     <div className="box">
                    <div className="image"><img src="img4.jpeg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                    </div>

                    <div className="box">
                    <div className="image"><img src="img5.jpeg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                    </div>

                    <div className="box">
                    <div className="image"><img src="img6.jpeg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                    </div>
                </div>

                <div>
                    <div className="box">
                    <div className="image"><img src="img7.jpg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                    </div>

                    <div className="box">
                    <div className="image"><img src="img8.jpeg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                    </div>

                    <div className="box">
                    <div className="image"><img src="img9.jpeg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image"><img src="img10.jpeg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                    </div>

                    <div className="box">
                    <div className="image"><img src="img12.jpeg" alt="not found" /></div>
                    <div className="content">
                    <h3>Adventure & Tour</h3>
                    <p> The href attribute is required for an anchor to be keyboard accessible, navigable address as the href value. If you can</p>
                    <Link to="book" >Book Now</Link>
                    </div>
                    
                    <div/>
                </div>
            </div>
            <button >Load More</button>
        </div>
    )
}
export default Package;