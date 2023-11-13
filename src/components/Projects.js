import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/epiceats.png";
import projImg2 from "../assets/img/youtube.png";
import projImg3 from "../assets/img/google.png";
import projImg4 from "../assets/img/shoppingcart.png";
import firebase from "../assets/icons/firebase.png";
import google from "../assets/icons/google.png";
import react from "../assets/icons/react.png";
import github from "../assets/icons/github.png";
import bootstrap from "../assets/icons/bootstrap.png";
import tailwind from "../assets/icons/tailwind.png";
import youtube from "../assets/icons/tailwind.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import php from "../assets/icons/php.png";
import sql from "../assets/icons/sql.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Ungraduate_Coders",
      description: "An online learning website.",
      imgUrl: projImg1,
      technologies: [ google, html, bootstrap,css,js,php,sql],
      link: "https://ungraduatecoders.000webhostapp.com/",
    },
    {
      title: "NSTI DEHRADUN CLONE",
      description: "A CLONE SITE OF OFFICAL.",
      imgUrl: projImg2,
      technologies: [google, html, bootstrap,css],
      link: "https://s-youtube-clone.netlify.app",
    },
    {
      title: "RESUME",
      description: "A HTML CSS BASED RESUME.",
      imgUrl: projImg3,
      technologies: [google, html, bootstrap,css,js,php,sql],
      link: "https://g-clone-app.netlify.app",
    },
    // {
    //   title: "Mini Shopping Cart",
    //   description: "An E-Commerce Website.",
    //   imgUrl: projImg4,
    //   technologies: [bootstrap, react, github],
    //   link: "https://react-shop-cart-app.netlify.app",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Within this section, you will find a compilation of all the
                    projects I have personally created. By clicking on each
                    project, you can delve deeper into their details and examine
                    my work firsthand.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <div>
        <img src={BannerImg} alt="banner" />
      </div> */}
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
