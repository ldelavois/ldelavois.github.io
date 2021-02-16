import React, { Component } from "react";

import {Collapse} from 'react-collapse';
class Hobbies extends Component {

  // constructor(props) {
  //   super(props);
  //   this.toggleStrava = this.toggleStrava.bind(this);
  //   this.showStrava = false;
  // }

  // toggleStrava(props){
  //   this.showStrava = !this.showStrava;
  // }
  render() {
    if (this.props.resumeBasicInfo && this.props.resumeHobbies) {
        var sectionName = this.props.resumeBasicInfo.section_name.hobbies;
        var hobbies = this.props.resumeHobbies.map(function (hobbies, i) {
          return (
            <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center hobbies-tile">
              <i data-icon={hobbies.icon}
              className="iconify" style={{ fontSize: '50px' }}>
                  </i>
                  <p className="text-center" style={{ marginTop: '4px' }}>
                    {hobbies.name}
                  </p>
              </div>
            </span>
          </li>
          );
        });
      
    }

    return (
        <section id="hobbies">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
            <span>{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto hobbies-icon">{hobbies}</ul>
            {/* <div>
              <button onClick={this.toggleStrava}>Strava stats</button>
            <Collapse isOpened={false}>
            <iframe height='454' width='300' frameBorder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/73405132/latest-rides/98e371f2dad4c45a28d306d0dac4094109eca42b'></iframe>
            </Collapse>
            </div> */}
          </div>
        </div>
        </section>
    );
  }
}

export default Hobbies;