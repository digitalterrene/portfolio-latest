import mern from "../assets/img/mern.png";
import meter2 from "../assets/img/meter2.svg";
import hcj from "../assets/img/hcj.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import tb from "../assets/img/tb.jpeg";
import af from "../assets/img/af.jpg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
                          I have worked with several web technologies for several years. 
                          Got my skills initially from college associate studies and bootcamps.
                          Then polished them over the years of working with a few companies.

                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img style={{width:270, height:150,
                                   border:'2px solid transparent', borderRadius:30}} src={mern} alt="Image" />
                                <h5>MERN</h5>
                            </div>
                            <div className="item">
                            <img style={{width:270, height:150,
                                   border:'2px solid transparent', borderRadius:30}} src={hcj} alt="Image" />
                                <h5>HTML,CSS,Javascript</h5>
                            </div>
                            <div className="item">
                            <img style={{width:270, height:150,
                                   border:'2px solid transparent', borderRadius:30}} src={af} alt="Image" />
                                <h5>AWS, Firebase</h5>
                            </div>
                            <div className="item">
                            <img style={{width:270, height:150,
                                   border:'2px solid transparent', borderRadius:30}} src={tb} alt="Image" />
                                <h5>TailwindCSS, Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}