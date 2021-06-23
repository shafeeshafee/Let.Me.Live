import React from "react";
import "../styles/styles.css";
import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function AboutUs() {
	const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />;
	const GitHub = <FontAwesomeIcon icon={faGithub} />;

	return (
		<div className="pt-5 pb-24 font-bodySans">
			<Fade>
				<div className="pt-10 pb-20">
					<h1 className="text-6xl font-bold font-bodySans">A Voice for the People</h1>
				</div>
				<hr />
				<h2 className="text-4xl font-bold font-bodySans py-10 ">
					LET. ME. LIVE. is an independent service for anonymously reporting tenant harassment in New York City.
				</h2>
				<div className="protest font-headerSans">
					<div className="flex flex-col justify-center w-full lg:w-1/3 m-auto text-justify break-words bg-black px-10 xl:h-screen items-center text-3xl text-white">
						<h3 className="text-4xl font-bold py-5 uppercase font-bodySans">It's Time For A Change</h3>
						<p className="py-3">
							Let's help end tenant harassment against low-income New Yorkers by making unfair housing practices visible and open to
							accountability.
						</p>
						<p className="py-3">
							As NYC grapples with the impact of COVID-19, there is another unfolding crisis of tenant harassment and displacement that is
							disproportionately affecting low-income and immigrant communities.
						</p>
						<p className="text-lg self-end font-bodySans text-lightgray">
							For more information, visit the <br />
							<a
								className="text-primaryYellow"
								href="https://www1.nyc.gov/site/hpd/services-and-information/tenant-harassment.page"
								target="_blank"
								rel="noreferrer"
							>
								Tenant Harassment page on nyc.gov
							</a>
						</p>
					</div>
				</div>
				{/* Divider */}
				<p className="text-6xl uppercase py-10">
					<span className="bg-shockingYellow px-3 rounded-xl">Let.Me.Live Team</span>
				</p>
				<p className="py-3">Contact us directly on LinkedIn for any inquiries</p>
				<div className="border border-t-2 border-b-0 border-l-0 border-r-0 py-10 m-auto hidden lg:block w-1/3 border-gray-400 opacity-50"></div>
				<div className="flex flex-wrap w-11/12 justify-center items-center m-auto pt-10">
					<div className="bg-jetblack sm:bg-white flex flex-col justify-center items-center px-10 w-full lg:w-auto pt-10 lg:pt-0">
						<img className="h-24 md:h-36 lg:h-64 w-auto rounded-xs sm:rounded-full" src="images/profiles/Shafee.jpeg" alt="profile" />
						<h2 className="pt-3 text-white sm:text-jetblack text-xl font-bold">Shafee Ahmed</h2>
						<h3 className="pt-3 text-white sm:text-jetblack text-xl">Full Stack Engineer</h3>
						<div className="p-5">
							<a className="text-lg md:text-2xl lg:text-4xl xl:text-6xl px-3" href="https://www.linkedin.com/in/shafeelinks/">
								{LinkedIn}
							</a>
							<a className="text-lg md:text-2xl lg:text-4xl xl:text-6xl px-3" href="https://github.com/shafeeshafee">
								{GitHub}
							</a>
						</div>
					</div>
					<div className="bg-primaryYellow sm:bg-white flex flex-col justify-center items-center px-10 w-full lg:w-auto pt-10 lg:pt-0">
						<img
							className="h-24 md:h-36 lg:h-64 w-auto rounded-xs sm:rounded-full"
							src="images/profiles/StephaniePena.jpeg"
							alt="profile"
						/>
						<h2 className="pt-3 text-bg-charcoal text-xl font-bold">Stephanie Peña</h2>
						<h3 className="pt-3 text-bg-charcoal text-xl">Front End Developer</h3>
						<div className="p-5">
							<a
								className="text-lg md:text-2xl lg:text-4xl xl:text-6xl px-3"
								href="https://www.linkedin.com/in/stephanie-a-peña-1132bb16a/"
							>
								{LinkedIn}
							</a>
							<a className="text-lg md:text-2xl lg:text-4xl xl:text-6xl px-3" href="https://github.com/stephp23">
								{GitHub}
							</a>
						</div>
					</div>

					<div className="bg-jetblack sm:bg-white flex flex-col justify-center items-center px-10 w-full lg:w-auto pt-10 lg:pt-0">
						<img className="h-24 md:h-36 lg:h-64 w-auto rounded-xs sm:rounded-full" src="images/profiles/Jahaz.jpg" alt="profile" />
						<h2 className="pt-3 text-white sm:text-jetblack text-xl font-bold">Jahaziel Israel</h2>
						<h3 className="pt-3 text-white sm:text-jetblack text-xl">UI UX Engineer</h3>
						<div className="p-5">
							<a className="text-lg md:text-2xl lg:text-4xl xl:text-6xl px-3" href="https://www.linkedin.com/in/jahazielbenisrael/">
								{LinkedIn}
							</a>
							<a className="text-lg md:text-2xl lg:text-4xl xl:text-6xl px-3" href="https://github.com/blaquebeardcoder">
								{GitHub}
							</a>
						</div>
					</div>

					<div className="bg-primaryYellow sm:bg-white flex flex-col justify-center items-center px-10 w-full lg:w-auto pt-10 lg:pt-0">
						<img className="h-24 md:h-36 lg:h-64 w-auto rounded-xs sm:rounded-full" src="images/profiles/Naeem.jpg" alt="profile" />
						<h2 className="pt-3 text-bg-charcoal text-xl font-bold">Naeem Shafi</h2>
						<h3 className="pt-3 text-bg-charcoal text-xl">Frontend Web Developer</h3>
						<div className="p-5">
							<a className="text-lg md:text-2xl lg:text-4xl xl:text-6xl px-3" href="https://www.linkedin.com/in/naeem-s-93a35b67/">
								{LinkedIn}
							</a>
							<a className="text-lg md:text-2xl lg:text-4xl xl:text-6xl px-3" href="">
								{GitHub}
							</a>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default AboutUs;
