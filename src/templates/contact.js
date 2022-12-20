import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SimpleMap from "./maps";

// https://www.emailjs.com/docs/examples/reactjs/

export default function Contact() {
	const [contactInfo, setContactInfo] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (event) => {
		setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
	};
	const form = useRef();

	const sendEmail = (event) => {
		event.preventDefault();
		// SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(
				(result) => {
					setContactInfo({ name: "", email: "", message: "" });
					toast.info("Requirement submiited!", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				},
				(error) => {
					toast.error("Your message was not able to be sent", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			);
	};
	const mapStyle = {
		height: "500px",
	};
	const pageStyle = {
		overflow: "hidden",
	};

	return (
		<div style={pageStyle}>
			<div className="row">
				<div className="col-sm-6">
					<section className="my-4 mx-5 card px-3">
						<h2 className="h1-responsive font-weight-bold text-center my-4">
							Contact us
						</h2>
						<p className="text-center w-responsive mx-auto mb-5">
							Do you have any questions? Please do not hesitate to contact us
							directly
						</p>

						<div className="row">
							<div className="col-md-12 mb-md-0 mb-5">
								<form
									ref={form}
									onSubmit={sendEmail}
									id="contact-form"
									name="contact-form"
									method="POST"
								>
									<div className="row">
										<div className="col-md-12">
											<div className="md-form mb-0">
												<label htmlFor="name" className="">
													Your name
												</label>
												<input
													type="text"
													id="name"
													name="name"
													className="form-control"
													value={contactInfo.name}
													onChange={handleChange}
													required
													placeholder="Fisrtname lastname"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="md-form mb-0">
												<label htmlFor="email" className="">
													Your email
												</label>
												<input
													type="text"
													id="email"
													name="email"
													className="form-control"
													value={contactInfo.email}
													onChange={handleChange}
													placeholder="abc@xyz.com"
													required
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="md-form">
												<label htmlFor="message">Requirement details</label>
												<textarea
													type="text"
													id="message"
													name="message"
													rows="3"
													className="form-control md-textarea"
													value={contactInfo.message}
													placeholder="Describe briefly what are you looking to buy"
													onChange={handleChange}
													required
												></textarea>
											</div>
										</div>
									</div>
									<br />
									<div>
										<button
											type="submit"
											className="mt-4 md:mt-0 rounded btn-form bg-blue-500 text-white font-semibold md:rounded-none mx-auto"
										>
											Submit Requirement
										</button>
									</div>
								</form>
								<ToastContainer
									position="top-right"
									autoClose={5000}
									hideProgressBar={false}
									newestOnTop={false}
									closeOnClick
									rtl={false}
									pauseOnFocusLoss
									draggable
									pauseOnHover
								/>
								<ToastContainer />
							</div>
						</div>
					</section>
				</div>
				<div className="col-sm-6 my-auto mx-auto" style={mapStyle}>
					<SimpleMap></SimpleMap>
				</div>
			</div>
		</div>
	);
}
