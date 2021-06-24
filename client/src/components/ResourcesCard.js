function ResourcesCard({ resource, link }) {
	return (
		<div>
			<li className="border-gray-400 flex flex-row font-bodySans text-offwhite py-3">
				<div className="select-none flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-yellow-600">
					<div className="flex-1 pl-1 mr-16">
						<div className="font-medium">{resource}</div>
					</div>
					<div className="cursor-pointer w-1/4 text-wrap text-center flex text-jetblack text-bold flex-col rounded-md bg-primaryYellow justify-center items-center mr-10 px-10 py-3">
						<a className="font-bold text-md" href={link} target="_blank" rel="noreferrer">
							View
						</a>
					</div>
				</div>
			</li>
		</div>
	);
}

export default ResourcesCard;
