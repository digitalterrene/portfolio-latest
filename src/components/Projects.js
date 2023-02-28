import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import vert from "../assets/img/vert.png";
import vstore from "../assets/img/vstore.png";
import kf from "../assets/img/kf.png";
import rodlip from "../assets/img/rodlip.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const all = [
    {
      title: "Vertueal Inc Startup",
      description: "Design & Development",
      imgUrl: vert,
    },
    {
      title: "Keng Foundation NPO",
      description: "Software Development",
      imgUrl: kf,
    },
    {
      title: "RODLIP Org",
      description: "Design, Development & Content Creation",
      imgUrl: rodlip,
    },
    {
      title: "Vertueal Store",
      description: "Design & Development",
      imgUrl: vstore,
    }
  ];

  const websites = [
    {
      title: "Vertueal Inc Startup",
      description: "Design & Development",
      imgUrl: vert,
    },
    {
      title: "Keng Foundation NPO",
      description: "Software Development",
      imgUrl: kf,
    },
    {
      title: "RODLIP Org",
      description: "Design, Development & Content Creation",
      imgUrl: rodlip,
    }
  ];
  const apps = [
    {
      title: "Vertueal Store",
      description: "Design & Development",
      imgUrl: vstore,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Full Stack projects using various web technologies including React,Express,
                    MongoDb, Node, Firebase,AWS and PassageID.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="second">Websites</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="third">Apps</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            all.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            websites.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            apps.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}