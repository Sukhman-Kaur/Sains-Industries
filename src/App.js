import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppProvider from "./components/AppProvider";

import Home from "./templates/home/home";
import Products from "./templates/products";
import Product from "./templates/product";
import About from "./templates/about";
import Contact from "./templates/contact";

function App() {
	return (
		<Router>
			<AppProvider>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/products">
						<Products />
					</Route>
					<Route
						path="/products/:id"
						render={(props) => <Product {...props} {...props.match.params} />}
					/>
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="*">
						<div className="tw-container text-center py-20">
							<h2 className="font-bold">404: Page Not Found</h2>
							<Link to="/" className="mt-5 btn w-max mx-auto">
								Return To Home
							</Link>
						</div>
					</Route>
				</Switch>
			</AppProvider>
		</Router>
	);
}

export default App;
