import React, { Component } from 'react';
import $ from 'jquery';
import './App.scss';
import Gotop from 'react-go-top';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: 'bar',
      resumeData: {},
      sharedData: {}
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
      ? `res_primaryLanguage.json`
      : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(pickedLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(oppositeLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Gotop 
          style={{width:"55px", height:"55px"}}
          visibilityHeight={600} 
          target={()=>document.getElementById('app')} 
        />
        <Header resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}/>
        <div className="col-md-12 text-center language">
            <div
                onClick={() =>
                this.applyPickedLanguage(
                    window.$primaryLanguage,
                    window.$secondaryLanguageIconId
                )
                }
                style={{ display: "inline" }}>
                <span
                className="iconify language-icon mr-5"
                data-icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
                id={window.$primaryLanguageIconId}
                ></span>
            </div>
            <div
                onClick={() =>
                this.applyPickedLanguage(
                    window.$secondaryLanguage,
                    window.$primaryLanguageIconId)}
                style={{ display: "inline" }}>
                <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-france"
                data-inline="false"
                id={window.$secondaryLanguageIconId}
                ></span>
            </div>
          </div>

        <About resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}/>
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills resumeBasicInfo={this.state.resumeData.basic_info}
        sharedSkills={this.state.sharedData.skills} />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Hobbies 
        resumeBasicInfo={this.state.resumeData.basic_info}
        resumeHobbies = {this.state.resumeData.hobbies}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
