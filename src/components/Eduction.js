import React from "react";
import { Container, Row } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Image from "./Image";

export const Eduction = () => {
  return (
    <section className="eduction" id="eduction">
      <Container>
        <Row>
          <h2 className="text-center mb-5"> Educational Qualifications</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2022 - 2024"
              iconStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              icon={<Image />}
            >
              <h3 className="vertical-timeline-element-title">
                NSTI DEHRADUN, Diploma
              </h3>

              <p>Advance Diploma in IT, Networking and Cloud Computing.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2021- 2024"
              iconStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              icon={<Image />}
            >
              <h3 className="vertical-timeline-element-title">
                Veer Kuwar Singh University, Graduation
              </h3>

              <p>Bachelor in Arts(ENGLISH) </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2019 - 2021"
              iconStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              icon={<Image />}
            >
              <h3 className="vertical-timeline-element-title">
              H.D JAIN COLLEGE
              </h3>

              <p>INTERMEDIATE(SCIENCE)</p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2018 - 2019"
              iconStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              icon={<Image />}
            >
              <h3 className="vertical-timeline-element-title">
              S.T JOHNS SECONDARY SCHOOL 
              </h3>

              <p>MATRICULATION</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Row>
      </Container>
    </section>
  );
};
