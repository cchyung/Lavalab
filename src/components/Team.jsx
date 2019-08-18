import React, { Component } from "react";
import "../App.css";

import Profile from "./Profile";

class Team extends Component {
	render() {
		return (
			<div>
				<div className="topBlack" />
				<div className="team">
					<h1> The Lavalab Team </h1>
					<div className="row">
						<div className=".col-md-*">
							<Profile
								src="ankit_m.jpg"
								title="Ankit Mukherjee"
								subTitle="Managing Director"
							/>
							<Profile
								src="gavin_bains.jpg"
								title="Gavin Bains"
								subTitle="Director of Operations"
							/>
							<Profile
								src="natalia_murillo.png"
								title="Natalia Murillo"
								subTitle="Director of Community"
							/>
						</div>
						<div className=".col-md-*">
							<Profile
								src="markus_snelder.png"
								title="Markus Snelder"
								subTitle="Director of Design and Brand"
							/>
							<Profile
								src="conner_chyung.png"
								title="Conner Chyung"
								subTitle="Director of Development"
							/>
							<Profile
								src="gus_goetze.jpg"
								title="Gus Goetze"
								subTitle="Director of Recruitment"
							/>
						</div>
						<div className=".col-md-*">
							<Profile
								src="nikita_takru.png"
								title="Nikita Takru"
								subTitle="Director of Sponsorship"
							/>
							<Profile
								src="glory_kanes.png"
								title="Glory Kanes"
								subTitle="Director of Industry Relations"
							/>
						</div>
					</div>
				</div>
				<div className="bottomReverse" />
			</div>
		);
	}
}
export default Team;
