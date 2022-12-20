import React, { useState, useEffect } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";

function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const location = useLocation();

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	useEffect(() => {
		if (width > 768) setMobileMenuOpen(false);
	}, [width]);

	useEffect(() => {
		setMobileMenuOpen(false);
		window.scrollTo(0, 0);
	}, [location]);

	const navStyle = {
		fontFamily: "HelveticaNeue-CondensedBold",
		color: "black",
	};
	const linkStyle = {
		listStyleType: "none",
		color: "black",
		textDecoration: "none",
		marginBottom: "0rem",
	};
	return (
		<header className="bg-gray-800" style={navStyle}>
			<div className="tw-container h-12 md:h-20 flex justify-between items-center">
				<Link
					to="/"
					className="flex items-center gap-2 font-semibold text-white"
					style={{ textDecoration: "none" }}
				>
					<i className="fa fa-cogs"></i>SAINS INDUSTRIES
				</Link>
				<nav>
					<ul className="flex gap-8" style={linkStyle}>
						<li>
							<NavLink
								to="/about"
								className="text-white text-uppercase"
								style={{ textDecoration: "none" }}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/products"
								className="text-white text-uppercase"
								style={{ textDecoration: "none" }}
							>
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className="text-white text-uppercase"
								style={{ textDecoration: "none" }}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div
				className={`z-20 fixed top-0 left-0 w-full h-screen bg-white px-5 py-8 transition-transform duration-500 ease-in-out transform  ${
					mobileMenuOpen ? "" : "-translate-x-full"
				}`}
			>
				<div className="w-full h-full text-white">
					<div className="flex justify-between items-center">
						<Link
							to="/"
							className="flex items-center gap-2 font-semibold text-white"
						>
							<i className="fa-2x fas fa-cogs"></i>
							Sains Industries
						</Link>
						<span
							onClick={() => setMobileMenuOpen(false)}
							className="cursor-pointer text-3xl font-semibold"
						>
							X
						</span>
					</div>
					<ul className="mt-7 flex flex-col gap-7 text-xl">
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/products">Products</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
