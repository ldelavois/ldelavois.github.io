import React, { Component } from 'react';
import Typical from 'react-typical';

class Header extends Component {

    render() {
        if (this.props.sharedBasicInfo) {
            var name = this.props.sharedBasicInfo.name;
        }
        if (this.props.resumeBasicInfo) {
          var title = this.props.resumeBasicInfo.title;
      }

        return (
            <header id="home">
                <div className="row aligner" style={{ height: '100%'}}>
                    <div className="col-md-12" style={{paddingTop:'250px'}}>
                        <div>
                            <h1>
                                <Typical steps={[name]} wrapper="p" />
                            </h1>
                            <h1>
                                <Typical steps={[title]} wrapper="p" />
                            </h1>
                        </div>

                        {/* <Switch
            checked={this.state.checked}
            onChange={this.onThemeSwitchChange}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <span
                className="iconify"
                data-icon="twemoji:owl"
                data-inline="false"
                style={{
                  display: 'block',
                  height: '100%',
                  fontSize: 25,
                  textAlign: 'end',
                  marginLeft: '20px',
                  color: '#353239',
                }}
              ></span>
            }
            checkedIcon={
              <span
                className="iconify"
                data-icon="noto-v1:sun-with-face"
                data-inline="false"
                style={{
                  display: 'block',
                  height: '100%',
                  fontSize: 25,
                  textAlign: 'end',
                  marginLeft: '10px',
                  color: '#353239',
                }}
              ></span>
            }
            id="icon-switch"
          /> */}
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
