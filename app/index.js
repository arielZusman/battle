var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function(){
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}}/>
	}
});

var ProfileLink = React.createClass({
	render: function(){
		return (
			<div>
				<a href={'https://www.github.com/' + this.props.name}>
					{this.props.name}
				</a>
			</div>
		);
	}
});

var ProfileName = React.createClass({
	render: function(){
		return (
			<div>{this.props.name}</div>
		);
	}
});

// var Avatar = React.createClass({
// 	render: function(){
// 		return (
// 			<div>
// 				<ProfilePic imageUrl={this.props.image} />
// 				<ProfileName name={this.props.image} />
// 			</div>
// 		);
// 	}
// });

ReactDOM.render(
	<HelloWorld name="Ariel" />,
	document.getElementById('app')
);