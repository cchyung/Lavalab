import React, { Component } from 'react';
import '../App.css';
import YouTube from 'react-youtube';

import LavaButton from './Button';
import Typewriter from '../scripts/Typewriter';

class Landing extends Component {
  render() {

    // for youtube player
    const opts = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 0,
        loop: 1,
        fs: 0,
        cc_load_policy: 0,
        iv_load_policy: 3,
        autohide: 0,
        rel: 0,
        start: 41,
      }
    }

    return (
      <div className="landing">
        <div className="video-background">
          <div className="video-foreground">
            <YouTube
              videoId="DXZzI302XZs"
              opts={opts}
              onReady={this._onReady}
              onStateChange={this._onStateChange}
            />
          </div>
        </div>
        <img className="role-image" src="LavaLab_Circle_Orange.png" />
        <br></br><br></br><br></br><br></br>
        <div className="row">
          <div className="centeredButtons">
            <LavaButton text="Explore" scrollButton="1" />
            <LavaButton text="   Video   " link="https://youtu.be/55Jqf3GELCc" />
          </div>
        </div>
        <h1> We are <Typewriter
                      speed={5}
                      tag="span"
                      className="typewriter"
                      text={["LAVALAB", "risk-takers", "developers", "designers",
                             "ideators", "visionaries", "innovators", "creators",]}
                      randomSpeed={true} />
        </h1>

      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }
  _onStateChange(event){
      if (event.data === 0) {
        event.target.playVideo();
      }
  }
}

export default Landing;
