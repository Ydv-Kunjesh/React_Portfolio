import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.png";
import navIcon2 from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className=" flex justify-center align-items-center ">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12}>
            <div className="social-icon d-flex  mt-3 justify-content-center gap-3">
              <a
                href="https://www.linkedin.com/in/kunjesh-ydv-6a2179252/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a
                href="httpfgs://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="github" />
              </a>
            </div>
            <h5 className="text-center py-3">
              <a
                href="https://jfjfjfjgithu"
                target="_blank"
                className="text-white"
                rel="noreferrer"
              >
                Kunjesh Yadav @Portfolio
              </a>
            </h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
