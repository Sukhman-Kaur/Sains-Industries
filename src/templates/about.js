import React from "react";
const bgOverlay = {
	background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0) 100%)",
};
const imgStyle = {
	position: "relative",
	zIndex: "-1",
	height: "500px",
	width: "100%",
};

const About = () => (
	<>
		<section id="overlay" className="py-6">
			<div style={bgOverlay}>
				<img src="../../images/chucks.jpeg" style={imgStyle} />
			</div>
		</section>
		<section id="team" className="py-6">
			<div className="tw-container grid grid-cols-1 gap-y-8 gap-x-16">
				<article>
					<div>
						<h2 className="font-bold">Our Team</h2>
						<div className="w-24 h-1 mt-3 bg-blue-600" />
					</div>
					<p className="mt-5 text-sm md:text-base lg:text-lg leading-loose">
						We have an team of experienced engineers, technicians and production
						staff to support the entire production process. Our team members are
						well versed with latest technology and their appropriate application
						enable us to produce better quality as well as quantity at lesser
						time. We have a team of technicians who hold vast industrial
						experience in offering excellent repairing and servicing of our
						range so as to assure highest point of client satisfaction. Regular
						skill training classes that we arrange for our professionals has
						enabled us to maintain an interactive environment with in the
						organization which has led us in maintaining the top notch position
						in the industry.
					</p>
				</article>
			</div>
		</section>
		<section id="about" className="py-8">
			<div className="tw-container grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16">
				<img
					style={{ height: "450px" }}
					alt="dining room"
					className="object-cover rounded w-full bg-gray-100"
					src={process.env.PUBLIC_URL + "/images/chucks.jpeg"}
				/>
				<article>
					<div>
						<h2 className="font-bold">About Us</h2>
						<div className="w-24 h-1 mt-3 bg-white" />
					</div>
					<p className="mt-5 text-sm md:text-base lg:text-lg leading-loose">
						Incepted in the year 1966, we are proud to introduce ourselves as a
						well established name in the manufacturer and suppliers of an
						extensive range of Lathe Machines & Lathe Chucks. Quality is our
						trademark and we make sure that it is maintained at each level of
						production process. We undertake rigorous measures while fabricating
						our range of machines, so as to assure that it corresponds to
						international standards. Further, we have facilitated our
						manufacturing unit with technically sound machines & equipment that
						enables us to manufacture machines with utmost precision. Client
						satisfaction is the sole aim of our organization and our efficient
						team work round the clock to meet their requirements. We make sure
						that our range is offered to our clients within the committed time
						frame
					</p>
				</article>
			</div>
		</section>
	</>
);

export default About;
