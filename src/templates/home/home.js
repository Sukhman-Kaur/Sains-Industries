import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../gallery";
import "./home.css";

const Panel = ({ id, name, image, price }) => (
	<article>
		<div className="relative h-56 rounded">
			<img
				alt={name}
				className="h-full rounded bg-black object-cover w-full"
				src={image}
			/>
			<div className="absolute top-0 left-0 w-full h-full rounded transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 flex justify-center items-center bg-opacity-40 bg-gray-800">
				<Link
					to={`/products/${id}`}
					className="cursor-pointer relative w-10 h-10 text-white rounded-full bg-blue-500 p-2.5"
				>
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 512 512"
					>
						<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
					</svg>
				</Link>
			</div>
		</div>
	</article>
);
const Home = () => (
	<>
		<section id="gallery">
			<Gallery></Gallery>
		</section>
		<section id="showcase" className="py-2">
			<div className="tw-container grid lg:grid-cols-2 place-items-center gap-x-32">
				<article>
					<h1 className="tracking-wider font-bold text-4xl md:text-5xl typed-out">
						Sains Industries
					</h1>
					<p className="mt-4 max-w-lg leading-loose ">
						Our company offers a wide range of scroll chucks which are used for
						workshops and tool rooms. These machines are used to back thread and
						other purposes. These machines are precision engineered and deliver
						consistent performance for a longer span. These chucks are
						appreciated for there sturdiness, strength and hardness.
					</p>
					<Link
						to="/products"
						className="btn px-6 py-3 bg-blue-500 text-white w-full md:w-max text-center mt-8"
					>
						Shop Now
					</Link>
				</article>
				<article id="showcase-image" className="relative hidden lg:block">
					<img
						alt="dining-room-example"
						style={{
							height: "550px",
						}}
						className="object-cover bg-gray-100 w-full rounded-md"
						src="https://2.imimg.com/data2/DH/PD/MY-1117715/lever-scroll-chucks-250x250.jpg"
					/>
					<img
						alt="media-shelves-room"
						className="z-30 bg-gray-100 transform -translate-x-2/4 absolute left-0 bottom-0  w-5/12 h-40 rounded-md"
						src="https://2.imimg.com/data2/SD/FA/MY-1117715/soft-jaws-500x500.jpg"
					/>
				</article>
			</div>
		</section>
		<section id="featured-products" className="bg-gray-100">
			<div className="tw-container py-14">
				<div>
					<h2 className="text-center font-bold text-3xl lg:text-4xl">
						Featured Products
					</h2>
					<div className="mt-3 w-24 h-1 bg-blue-400 mx-auto" />
				</div>
				<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					<Panel
						id="rec3jeKnhInKHJuz2"
						name="Face plate"
						image="https://2.imimg.com/data2/EB/CY/MY-1117715/face-plate-01-500x500.jpg"
						price={120999}
					/>
					<Panel
						id="rec7JInsuCEHgmaGe"
						name="Top Jaw"
						image="https://2.imimg.com/data2/QS/AP/MY-1117715/top-jaw-dp-chuck-250x250.jpg"
						price={79999}
					/>
					<Panel
						id="recNZ0koOqEmilmoz"
						name="Operating Screw"
						image="https://2.imimg.com/data2/FK/XX/MY-1117715/operating-screw-250x250.jpg"
						price={59999}
					/>
				</div>
				<button className="btn-sm md:btn mt-16 mx-auto bg-blue-500 text-blue-50 font-semibold">
					All Products
				</button>
			</div>
		</section>
		<section id="services" className="bg-blue-400">
			<div className="transform py-20 tw-container text-blue-50">
				<h3 className="font-bold mx-auto">
					Custom Machine Parts Built Only For You
				</h3>
			</div>
		</section>
		{/* <section id="newsletter">
			<div className="tw-container my-16 md:my-32 lg:my-8">
				<h2 className="font-bold">Join our newsletter and get 20% off</h2>
				<div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center gap-x-32">
					<p className="leading-7 mt-8 max-w-lg opacity-60">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
						sint unde quaerat ratione soluta veniam provident adipisci cumque
						eveniet tempore?
					</p>
					<form
						className="mt-6 md:mt-0 grid grid-cols-1 md:grid-cols-2 md:border-2 border-blue-500 rounded w-full max-w-lg  text-base md:text-lg lg:text-xl"
						style={{ gridTemplateColumns: "1fr auto" }}
					>
						<input
							className="bg-gray-100 border border-blue-400 md:bg-transparent md:border-0 px-3 py-2 outline-none"
							type="email"
							placeholder="Enter Email"
						/>
						<button
							className="mt-4 md:mt-0 rounded btn-form bg-blue-500 text-white font-semibold md:rounded-none"
							type="submit"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</section> */}
	</>
);

export default Home;
