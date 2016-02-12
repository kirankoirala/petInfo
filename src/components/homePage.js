//"use strict";

var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>PetX Home Page</h1>
				<p>This is first page. A lot will change in future.</p>
			</div>
		);
	}
});

module.exports = Home;