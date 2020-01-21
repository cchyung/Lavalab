import React, { Component } from "react";
import "./App.css";
import YouTube from "react-youtube";
import scrollToComponent from "react-scroll-to-component";
import ReacrBootstrap from "react-bootstrap";

import Landing from "./components/Landing";
import NewCohort from "./components/NewCohort";
import Curriculum from "./components/Curriculum";
import Team from "./components/Team";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Community from "./components/Community";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ReactTypeformEmbed } from "react-typeform-embed";
import ReactGA from "react-ga";

ReactGA.initialize("UA-123971961-1");

const Main = () => {
	ReactGA.pageview("/home");
	return (
		<div>
			<Landing />
			<Community />
			<Curriculum />
			<Team />
			<Footer />
		</div>
	);
};

const TypeForm = () => {
	ReactGA.pageview("/applynow");
	return (
		<ReactTypeformEmbed url={"https://usclavalab.typeform.com/to/Sn9pHn"} />
	);
};

class App extends Component {
	render() {
		return (
			<Router>
				<div className="test">
					<Route exact path="/" component={Main} />
					{/* <Route path="/apply" component={TypeForm} /> */}
					<Route path='/applynow' component={() => { 
     					window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdPvHAHu5mstcZ3hAzo6Xi2NN4mNzGN4WSPcbrsSYQrF4R09A/viewform?usp=sf_link'; 
     					return null;
					}}/>
				</div>
			</Router>
		);
	}
}

export default App;
