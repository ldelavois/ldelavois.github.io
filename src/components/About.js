import React, { Component } from 'react';

class About extends Component {
  render() {
      if (this.props.sharedBasicInfo) {
        var profilepic = "images/" + this.props.sharedBasicInfo.image;
      }
      if (this.props.resumeBasicInfo) {
        var sectionName = this.props.resumeBasicInfo.section_name.about;
        var hello = this.props.resumeBasicInfo.description_header;
        var about = this.props.resumeBasicInfo.description;
      }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 className="section-title">
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto">
            <div className="col-md-4 center">
              <div className="polaroid">
                <span style={{ cursor: 'auto' }}>
                  <img
                    height="auto"
                    src={profilepic}
                    alt="Ludovic DELAVOIS Profile Pic"
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: 'auto',
                      fontSize: '180%',
                      lineHeight: '200%',
                    }}
                  >
                      <h1>{hello}</h1>
                      <br/>
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
