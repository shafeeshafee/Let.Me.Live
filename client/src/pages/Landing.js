import HowThisWorks from "../components/LandingComponents/HowThisWorks";
import Neglected from "../components/LandingComponents/Neglected";
import Fade from "react-reveal/Fade";

function Landing() {
	return (
		<div className="">
			<div className="rally font-headerSans h-screen">
				<div className="flex flex-col justify-start items-start sm:pt-0 xl:pt-40 p-20 shadowed">
					<Fade cascade>
						<p className="mt-12 text-white text-6xl font-bodySans font-bold">Eviction Epidemic in the Air</p>
						<p className="mt-12 text-white text-4xl ">Underserved communities are seeing a surge of eviction over the past several years</p>
						<a
							href="https://www.cssny.org/news/entry/addressing-the-eviction-epidemic-2017-analysis"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="flex items-center bg-primaryYellow text-2xl rounded-lg text-charcoal font-bold font-bodySans drop-shadow-2xl mt-6 px-5 py-2 hover:bg-gray-800 hover:text-offwhite smoothed">
								Read More <img src="https://www.svgrepo.com/show/29038/right-arrow.svg" className="ml-5 py-3 w-6 h-auto" alt="" />
							</p>
						</a>
					</Fade>
				</div>
			</div>
			<Fade>
				<HowThisWorks />
				<Neglected />
			</Fade>
		</div>
	);
}

export default Landing;
