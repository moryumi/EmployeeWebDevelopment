import React from 'react'
import {Slide} from 'react-slideshow-image';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import '../Slide.css'


/* const slideImages=[
    img1,img2,img3,img4
]; */

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

function Home(props) {
    return (
        <div className="container">
            <h3 className="myStyle"> WELCOME ! </h3>
            <hr/>
            <div className="slide-container">
                <Slide {...properties}>
                <div className="each-slide">
                    <div>
                        <img className="img-fluid" src={img1} alt="img1"/>
                    </div>
                </div>
                <div className="each-slide ">
                    <div>
                    <img className="img-fluid" src={img2} alt="img2"/>
                    </div>
                </div>
                <div className="each-slide ">
                    <div>
                    <img className="img-fluid" src={img3} alt="img3"/>
                    </div>
                </div>
                <div className="each-slide ">
                    <div>
                    <img className="img-fluid" src={img4} alt="img4"/>
                    </div>
                </div>
                </Slide>
            </div>
            <hr/>
            {/* <img  className="img-fluid" src={require("../images/1.jpg")} alt="Logo" /> */}
        </div>
    )
}
export default Home;
