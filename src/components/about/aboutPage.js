//"use strict";

var React = require('react');

var About = React.createClass({
	render: function () {
		return (
			<div>
				<h1>About</h1>
				<p>
					About page will contain following topics:
					<ul>
						<li>About PetX</li>
						<li>About Us</li>
						<li>Contact Us</li>
						<li>Career</li>
						<li>Future Enhancements</li>
						<li>Our Peoples</li>
						<li>Search Day Care For Your Pet</li>
					</ul>
				</p>
			</div>
		); 
	}
});

module.exports = About;