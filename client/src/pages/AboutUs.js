import React from "react";
import "../styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import StephaniePena from "../images/StephaniePena.jpeg"

function AboutUs() {
	const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />;
	const GitHub = <FontAwesomeIcon icon={faGithub} />;

	return (
		<div className="pt-5 pb-24 font-bodySans">
			<div className="pt-10 pb-20">
				<h1 className="text-6xl font-bold font-bodySans">About LET. ME. LIVE</h1>
				<p className="pt-3 text-bg-charcoal text-xl">A Voice for the People</p>
			</div>
			<div className="border flex p-3 flex-wrap">
				<div className="flex flex-wrap xl:w-1/3 p-10 justify-center">
					<h2 className="text-4xl font-bold font-bodySans py-10 ">
						LET. ME. LIVE. is an independent service for reporting tenant harassment in New York City.
					</h2>
				</div>
				<div className="flex flex-wrap xl:w-1/3 p-10 justify-center">
					<h3 className="text-3xl font-bold font-bodySans py-5">Purpose</h3>
					<ul>
						<li className="text-2xl font-bodySans py-3">
							To help end tenant harassment against low-income New Yorkers by making unfair housing practices visible and open to
							accountability.
						</li>
					</ul>
					<ul>
						<h3 classname="text-3xl font-bold font-bodySans py-10">LET. ME. LIVE. Team</h3>
						<div className="team">
							<div className="team-role">
								<img src="https://picsum.photos/id/237/200/300" alt="profile" />
								<h2 className="pt-3 text-bg-charcoal text-xl font-bold">Shafee Ahmed</h2>
								<h3 className="pt-3 text-bg-charcoal text-xl">Frontend Web Developer</h3>
								<div className="links">
									<a href="https://www.linkedin.com/in/shafeelinks/">{LinkedIn}</a>
									<a href="https://github.com/shafeeshafee">{GitHub}</a>
								</div>
							</div>
							<div className="team-role">
								<img src="https://picsum.photos/id/237/200/300" alt="profile" />
								<h2 className="pt-3 text-bg-charcoal text-xl font-bold">Stephanie Peña</h2>
								<h3 className="pt-3 text-bg-charcoal text-xl">Front End Developer</h3>
								<div className="links">
									<a href="https://www.linkedin.com/in/stephanie-a-peña-1132bb16a/">{LinkedIn}</a>
									<a href="https://github.com/stephp23">{GitHub}</a>
								</div>
							</div>

							<div className="team-role">
								<img src="https://picsum.photos/id/237/200/300" alt="profile" />
								<h2 className="pt-3 text-bg-charcoal text-xl font-bold">Jahaziel Israel</h2>
								<h3 className="pt-3 text-bg-charcoal text-xl">UI UX Engineer</h3>
								<div className="links">
									<a href="https://www.linkedin.com/in/jahazielbenisrael/">{LinkedIn}</a>
									<a href="https://github.com/blaquebeardcoder">{GitHub}</a>
								</div>
							</div>

							<div className="team-role">
								<img src="https://picsum.photos/id/237/200/300" alt="profile" />
								<h2 className="pt-3 text-bg-charcoal text-xl font-bold">Naeem Shafi</h2>
								<h3 className="pt-3 text-bg-charcoal text-xl">Frontend Web Developer</h3>
								<div className="links">
									<a href="https://www.linkedin.com/in/naeem-s-93a35b67/">{LinkedIn}</a>
									<a href="">{GitHub}</a>
								</div>
							</div>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
