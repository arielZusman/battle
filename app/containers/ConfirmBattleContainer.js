var React = require('react'),    
    ConfirmBattle = require('../components/ConfirmBattle'),
    githubHelpers = require('../utils/githubHelpers')


var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return {
			isLoading: true,
			playersInfo: []
		}
	},
	componentWillMount: function(){
		console.log('componentWillMount')
	},	
	componentDidMount: function(){
	    console.log('componentDidMount')
		var query = this.props.location.query;
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function(players){
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				})
			}.bind(this))
	},
	handleInitiateBattle: function(){
		this.context.router.push({
			pathname: '/results',
			state: {
				playerInfo: this.state.playersInfo
			}
		})
	},
	componentWillReceiveProps: function(){
		console.log('componentWillReceiveProps')
	},
	componentWillUnmount: function(){
		console.log('componentWillUnmount')
	},
	render: function(){
		return(
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				onInitateBattle={this.handleInitiateBattle}
				playersInfo={this.state.playersInfo}
			/>
		)
	}
})

module.exports = ConfirmBattleContainer