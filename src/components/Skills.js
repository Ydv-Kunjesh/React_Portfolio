import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const skillsData = [
    {
      title: "HTML5",
      value: 90,
    },
    {
      title: "CSS3",
      value: 80,
    },
    {
      title: "JAVASCRIPT",
      value: 60,
    },
    {
      title: "REACT.JS",
      value: 60,
    },
    {
      title: "PHP",
      value: 70,
    },
    {
      title: "MONGODB",
      value: 70,
    },
    {
      title: "PYTHON",
      value: 50,
    },
    {
      title: "GIT/GITHUB",
      value: 60,
    },
    {
      title: "BOOTSTRAP",
      value: 60,
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                These skills reflect my extensive knowledge and expertise.
                <br></br> I highly encourage you to explore the comprehensive
                demonstration of my abilities.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skillsData.map((skill, index) => (
                  <div className="item " key={index}>
                    <div
                      style={{ width: 160, height: 160, position: "relative" }}
                    >
                      <CircularProgressbar
                        value={skill.value}
                        styles={buildStyles({
                          textColor: "red",
                          pathColor: "purple",
                        })}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "39%",
                          left: "33%",
                          fontSize: "30px",
                          fontWeight: "bold",
                        }}
                      >
                        <h3 className="text-center ">{skill.value}%</h3>
                      </div>
                    </div>

                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background img"
      />
    </section>
  );
};
