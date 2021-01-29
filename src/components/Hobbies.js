import React, { Component } from "react";

class Hobbies extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
        var sectionName = this.props.resumeBasicInfo.section_name.skills;
      
    }

    return (
        <section id="hobbies">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            {/* <ul className="list-inline mx-auto hobbies-icon">list hobbies</ul> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Hobbies;