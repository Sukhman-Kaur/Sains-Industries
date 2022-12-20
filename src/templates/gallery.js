import Carousel from "react-bootstrap/Carousel";

const bgOverlay = {
	background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0) 100%)",
};
const imageStyle = {
	position: "relative",
	zIndex: "-1",
	height: "500px",
	width: "100%",
};

function Gallery() {
	return (
		<Carousel>
			<Carousel.Item>
				<div style={bgOverlay}>
					<img
						className="d-block w-100"
						src={process.env.PUBLIC_URL + "/images/Machine-1.jpeg"}
						style={imageStyle}
						alt="Lathe Machine"
					/>
				</div>

				<Carousel.Caption>
					<h3>Lathe Machine</h3>
					<p>
						Machine tool that rotates a workpiece about an axis of rotation to
						perform various operations such as cutting, sanding, knurling,
						drilling
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<div style={bgOverlay}>
					<img
						className="d-block w-100"
						style={imageStyle}
						src={process.env.PUBLIC_URL + "/images/Machines.jpeg"}
						alt="Aari machine"
					/>
				</div>
				<Carousel.Caption>
					<h3>Aaari Machine</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<div style={bgOverlay}>
					<img
						className="d-block w-100"
						src={process.env.PUBLIC_URL + "/images/Machine-2.jpeg"}
						style={imageStyle}
						alt="Khraad machine"
					/>
				</div>
				<Carousel.Caption>
					<h3>Khraad Machine</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Gallery;
