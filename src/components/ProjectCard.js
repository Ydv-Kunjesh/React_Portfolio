import { Col } from "react-bootstrap";
import LinkIcon from "../assets/icons/link.png";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  technologies,
  link,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="logo" style={{ height: 250 }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h6>{description}</h6>
          <div className="d-flex justify-content-center align-items-center gap-2">
            {technologies.map((item, i) => (
              <img
                key={i}
                className="img-hover"
                alt="logo"
                src={item}
                style={{ heigh: 40, width: 40, cursor: "pointer" }}
              />
            ))}
          </div>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className="py-3 text-white mt-3 "
          >
            Live Demo
            <img
              alt="icons"
              className="img-hover"
              src={LinkIcon}
              style={{ heigh: 40, width: 40, cursor: "pointer", marginTop: 10 }}
            />
          </a>
        </div>
      </div>
    </Col>
  );
};
