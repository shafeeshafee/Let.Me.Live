import ResourcesCard from "../components/ResourcesCard";
import Fade from "react-reveal/Fade";

function Resources() {
	return (
		<div className="bg-charcoal pt-10 pb-20">
			<div className="pt-10 pb-20">
				<h1 className="text-2xl lg:text-6xl text-shockingYellow font-bold font-bodySans">Tenant Harassment Resources</h1>
			</div>
			<div class="container flex mx-auto w-full items-center justify-center">
				<ul class="flex flex-col p-4">
					<Fade bottom>
						<ResourcesCard
							resource="NYC Tenants' Rights and Responsibilities"
							link="https://www1.nyc.gov/site/hpd/services-and-information/tenants-rights-and-responsibilities.page"
						/>
						<ResourcesCard resource="Tenant Rights" link="https://www1.nyc.gov/site/buildings/renter/tenant-rights.page" />
						<ResourcesCard resource="Filing a Complaint" link="https://www1.nyc.gov/site/buildings/renter/file-a-complaint.page" />
						<ResourcesCard resource="Tenant's Rights Guide (PDF)" link="https://www1.nyc.gov/assets/buildings/pdf/tenants_rights.pdf" />
						<ResourcesCard
							resource="10 NYC Tenants’ Rights"
							link="https://www.curbed.com/article/new-york-city-landlord-tenant-law-rights.html"
						/>
					</Fade>
				</ul>
			</div>
		</div>
	);
}

export default Resources;
