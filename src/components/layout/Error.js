import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div className="container pt-4">
			<h1 className="ta-center pt-2 text-head text-primary">
				404 Page Not Found, return to
				<Link className="btn btn-secondary text-white ml-1" to="/">
					Home
				</Link>
			</h1>
		</div>
	);
};

export default Error;
