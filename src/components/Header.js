import React, { Component } from 'react';
import Typical from 'react-typical';

class Header extends Component {

    render() {
        if (this.props.sharedBasicInfo) {
            var name = this.props.sharedBasicInfo.name;
            var networks = this.props.sharedBasicInfo.social.map(function (network) {
                return (
                  <span key={network.name} className="m-4">
                    <a style={{color: "black"}} href={network.url}>
                      <i className={network.class}></i>
                    </a>
                  </span>
                );
              });
        }
        if (this.props.resumeBasicInfo) {
          var title = this.props.resumeBasicInfo.title;
      }

        return (
            <header id="home">
                <div className="row aligner">
                    <div className="col-md-12" style={{marginTop:'20vh'}}>
                        <div>
                            <h1>{name}</h1>
                            <h2 style={{minHeight:'60px'}}>
                                <Typical steps={[title]} wrapper="p" />
                            </h2>
                            <div style={{fontSize:'50px'}}>{networks}</div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
