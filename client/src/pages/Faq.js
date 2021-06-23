function Faq() {
  return (
    <div className="pt-5 pb-24">
      <h1 className="text-6xl font-bold font-bodySans py-10">FAQs</h1>
      <div className="border flex p-3 flex-wrap">
      <div className="flex flex-wrap xl:w-1/3 p-10 justify-center">
        <h2 className="text-4xl font-bold font-bodySans py-10 ">How does LET.ME.LIVE. work?</h2>
      </div>
      <div className="flex flex-wrap xl:w-1/3 p-10 justify-center">
        <h3 className="text-3xl font-bold font-bodySans py-5">View Community Reports
        </h3>
            <ul>
                <li className="text-2xl font-bodySans py-3">See what other tenants are going through in your neighborhoods.</li>
                <li className="text-2xl font-bodySans py-3">Read anonymous reports of tenants who have experienced tenant harrasment.</li>
            </ul>
          <ul>
          <h3 className="text-3xl font-bold font-bodySans py-10">Submit a Report of Your Own
            </h3>
            <li className="text-2xl font-bodySans py-3">Tell us your experience with tenant harrassment.</li>
            <li className="text-2xl font-bodySans py-3">Fill out a simple online form answering questions based on your experience with tenant harrasment.</li>
            <li className="text-2xl font-bodySans py-3">All information about you is kept anonymous for your safety.</li>
          </ul>
          
      </div>
      </div>
      </div>
      
  );
}

export default Faq;
