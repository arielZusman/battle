var React = require('react'),
	transparentBg = require('../styles').transparentBg,
	ReactRouter = require('react-router'),
	Link = ReactRouter.Link


var Home = React.createClass({
	render: function(){
		return(
			<div className="jumbotron col-sm-12 text-center" styles={transparentBg}>
				<h1>Github Battle</h1>
				<p className="lead">Some fanby motto</p>
				<Link to="/playerOne">
					<button type='button' className='btn btn-lg btn-success'>Get Started</button>
				</Link>
			</div>
		)
	}
})

module.exports = Home