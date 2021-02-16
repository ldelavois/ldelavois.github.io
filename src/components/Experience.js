import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const allTypes = work.type;

        var type = allTypes.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            date={work.years}
            iconStyle={{
              background: "#ffff",
              color: "#black",
              textAlign: "center",
            }}
            key={i}
            >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {type}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left", fontSize: '20px', fontWeight: 'bold' }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left", fontSize: '18px'}}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="experience">
        <div className="col-md-12 mx-auto">
            <h1 className="section-title">
                {sectionName}
            </h1>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#FFFF",
                color: "#black",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-graduation-cap mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;