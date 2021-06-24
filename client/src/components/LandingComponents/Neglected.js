import { Link } from "react-router-dom";

function Neglected() {
	return (
		<div className="bg-charcoal p-0 lg:py-24 flex justi flex-wrap justify-center pb-10 items-center">
			<div className="xl:w-1/3 w-full">
				<div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-2xl transform lg:-skew-y-3 my-20">
					<div className="flex justify-center md:justify-end -mt-16">
						<img
							className="lg:w-56 lg:h-56 object-cover rounded-full border-4 border-shockingYellow transform lg:-skew-y-3"
							src="https://images.unsplash.com/photo-1621624666561-84d0107001dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
						/>
					</div>
					<div>
						<h2 className="text-gray-800 py-3 text-3xl font-semibold">Raheem Taylor, 31</h2>
						<p className="text-gray-500 pb-1">Brooklyn, NY</p>
						<hr />
						<p className="mt-2 text-lg text-gray-600 text-justify p-1 font-headerSans">
							“I support my family everyday, working long hours and delivering food from dawn to dusk. But when I come home, there is no
							heating. My landlord doesn’t care. When I read stories of people on Let.Me.Live, I don't feel so alone. We all have a communal
							struggle.”
						</p>
					</div>
					<br />
				</div>
			</div>
			<div className="w-full p-3 lg:p-0 lg:w-1/3  font-bodySans">
				{/* title */}
				<h1 className="text-xl lg:text-4xl xl:text-7xl text-center lg:text-right text-offwhite">
					Are you being{" "}
					<strong>
						<span className="text-primaryYellow shadowed">neglected</span>
					</strong>{" "}
					by your landlord?
				</h1>
				<p className="pt-10 p-3 text-md lg:text-4xl text-offwhite text-center lg:text-right">
					You don't have to be alone. Share your story with the world
				</p>
				<Link to="/report">
					<p className="flex m-auto lg:float-right items-center bg-primaryYellow w-5/12 text-2xl rounded-lg text-charcoal font-bold font-bodySans drop-shadow-2xl mt-6 px-5 py-2 hover:bg-gray-800 hover:text-offwhite smoothed shadowed">
						Submit a Report <img src="https://www.svgrepo.com/show/115104/paper.svg" className="ml-5 py-3 w-6 h-auto" alt="" />
					</p>
				</Link>
			</div>
		</div>
	);
}

export default Neglected;
