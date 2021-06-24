import { Link } from "react-router-dom";

import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

function Faq() {
	return (
		<div className="pt-5 pb-24">
			<Fade>
				<h1 className="text-6xl font-bold font-bodySans py-10">FAQs</h1>
				<div className="border flex p-3 flex-wrap flex-col justify-center m-auto items-center">
					<div className="flex flex-wrap xl:w-1/3 p-10 justify-center text-justify">
						<h3 className="text-3xl font-bold font-bodySans">View Community Reports</h3>
						<p>
							<p className="text-lg font-bodySans py-3">See what other tenants are going through in your neighborhoods.</p>
							<p className="text-lg font-bodySans py-3">Read anonymous reports of tenants who have experienced tenant harrasment.</p>
						</p>
						<p>
							<h3 className="text-3xl font-bold font-bodySans p-5">Submit a Report of Your Own</h3>
							<p className="text-lg font-bodySans py-3">Tell us your experience with tenant harrassment.</p>
							<p className="text-lg font-bodySans py-3">
								Fill out a simple online form answering questions based on your experience with tenant harrasment.
							</p>
							<p className="text-lg font-bodySans py-3">All information about you is kept anonymous for your safety.</p>
						</p>
					</div>
					<hr />

					{/* Divider */}
					<div className="border border-t-2 border-b-0 border-l-0 border-r-0 py-10 hidden lg:block w-1/3 border-gray-400 opacity-50"></div>
					<ul className="flex justify-center items-center gap-10 text-justify flex-wrap h-full font-bodyFont">
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-semibold mb-2 leading-6 text-tkhpurple font-headings">What is Let.Me.Live?</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
                  Let.Me.Live is an online app offering a platform for tenants to anonymously report tenant harassment in New York City.
									</p>
								</p>
							</li>
						</Pulse>
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-semibold mb-2 leading-6 text-tkhpurple font-headings">
									Is Let.Me.Live associated with a company?
								</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
                  Let.Me.Live. is not involved with any private companies, real estate related industries, or other entities for profit.
									</p>
								</p>
							</li>
						</Pulse>
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-semibold mb-2 leading-6 text-tkhpurple font-headings">
									Is Let.Me.Live only for New York Residents?
									{/* for the time being, yes */}
								</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
										At this moment, Let.Me.Live. serves the residents of New York City. Other cities  
									</p>
								</p>
							</li>
						</Pulse>
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-semibold mb-2 leading-6 text-tkhpurple font-headings">
									Does Let.Me.Live have any plans for the future?
								</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
                  Let.Me.Live. wants to provide an informational section that connects users with tenant harrasmment related resources. Along with making our service more inclusive, by incorporating support for the most common languages spoken in New York City. 
									</p>
								</p>
							</li>
						</Pulse>
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-semibold mb-2 leading-6 text-tkhpurple font-headings">
									Who do I contact if I have questions about the site?
								</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
										Directly contact any of the developers listed{" "}
										<span className="text-yellow-800 hover:bg-primaryYellow hover:text-jetblack">
											<Link to="/aboutus">on our team page</Link>
										</span>
									</p>
								</p>
							</li>
						</Pulse>
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-semibold mb-2 leading-6 text-tkhpurple font-headings">How can I donate to this cause?</p>
								{/* We can't as of now */}
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
									Donation instructions to support LET.ME.LIVE. will be anounced in the future. 
									</p>
								</p>
							</li>
						</Pulse>
					</ul>
				</div>
			</Fade>
		</div>
	);
}

export default Faq;
