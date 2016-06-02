var React = require('react')

const puke = obj => <pre>{JSON.stringify(obj, null, ' ')}</pre>

const ConfirmBattle = props => 
		props.isLoading === true 
		? <p> Loading </p>
		: <div> Confirm Battle: {puke(props)} </div>	


module.exports = ConfirmBattle