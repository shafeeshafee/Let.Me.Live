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
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nesciunt reprehenderit saepe cum fuga expedita, officia
										maiores eos tempora veritatis, dignissimos ad culpa quia omnis atque corrupti maxime, sint accusamus.
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
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit. Magni cumque aliquid eos doloremque,
										quas neque ipsa beatae officia distinctio sunt tempore minus ducimus repellendus nemo adipisci ad maiores?
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
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, harum laboriosam corporis aut, quasi magnam deleniti
										culpa, facere error cupiditate dolorem. Voluptatem recusandae soluta perspiciatis nesciunt ad dolorem possimus..
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
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, modi! Reiciendis voluptate quis enim quibusdam labore
										ipsam voluptatem iste molestiae assumenda, suscipit ex eius minus earum porro adipisci corporis laboriosam.
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
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, modi! Reiciendis voluptate quis enim quibusdam labore
										ipsam voluptatem iste molestiae assumenda, suscipit ex eius minus earum porro adipisci corporis laboriosam.
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
