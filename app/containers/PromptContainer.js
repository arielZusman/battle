var React = require('react'),    
    Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired,
  },
  getInitialState: function(){
    return {
      username: ''
    }
  },
  handleUpdateUser: function(e){
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e){
    e.preventDefault()
    // cache the username
    var username = this.state.username
    // reset the field
    this.setState({
      username: ''
    })

    if(this.props.routeParams.playerOne){
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo      
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function () {
    return (
      <Prompt 
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
})

module.exports = PromptContainer
