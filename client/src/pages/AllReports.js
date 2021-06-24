import { useState, useEffect } from "react";
import axios from "axios";
import ReportCard from "../components/ReportCard";
import Fade from "react-reveal/Fade";

function AllReports() {
	const [reportData, setReportData] = useState([]);

	const fetchData = () => {
		axios
			.get("https://lml-reports.herokuapp.com/api/viewreports")
			.then((res) => {
				setReportData(res.data.reports.reverse());
			})
			.catch((err) => console.log("Error: " + err));
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="pt-5 pb-24">
			<h1 className="text-6xl font-bold font-bodySans py-10">Community Reports</h1>
			<Fade>
				<div className="border flex p-3 flex-wrap">
					{reportData.map((report) => (
						<div className="flex flex-wrap xl:w-1/3 p-10 text-left">
							<ReportCard {...report} />
						</div>
					))}
				</div>
			</Fade>
		</div>
	);
}

export default AllReports;
