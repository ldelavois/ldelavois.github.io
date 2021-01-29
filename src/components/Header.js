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
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
