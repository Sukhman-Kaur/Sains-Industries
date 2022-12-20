// https://react-google-maps-api-docs.netlify.app/

import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
	width: "100%",
	height: "100%",
};

const center = {
	lat: 30.87892,
	lng: 75.85015,
};

class SimpleMap extends Component {
	render() {
		return (
			<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
				<GoogleMap mapContainerStyle={mapStyles} center={center} zoom={10}>
					{<Marker position={{ lat: 30.88874, lng: 75.8764 }} />}
					{/* Child components, such as markers, info windows, etc. */}
					<></>
				</GoogleMap>
			</LoadScript>
		);
	}
}
export default SimpleMap;
