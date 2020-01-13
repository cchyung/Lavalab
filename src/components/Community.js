import React, { Component } from 'react';
import '../App.css';

class Community extends Component {
  render() {
    return (
      <div>
        <div className="topBlack"></div>
            <div className="community" onclick="window.location.hash='back'">
              <h1> Find Your Co-Founders. </h1>
                    <br/>
                    <div className="row">
                        <div className="col-md-4">
                          <img className="role-image" src="designer.png"/>
                          <h1>1 Designer</h1>
                          <p>
                            Passionate about UX and Design Thinking. Well versed in the abilities and frailties of the human mind.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <img className="role-image" src="developer.png"/>
                          <h1>2 Developers</h1>
                          <p>
                            Self teacher and quick learner. Capable of analyzing viability and building the product.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <img className="role-image" src="production.png"/>
                          <h1>1 Product Manager</h1>
                          <p>
                            Multidisiplinary and disruptive. Someone who has big ideas and knows how to growth hack.
                          </p>
                        </div>
                    </div>
            </div>
      <div className="bottomReverse"></div>
    </div>

    );
  }
}
export default Community;
