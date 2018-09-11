import React from 'react';
import { connect } from 'react-redux';
import { changeCarninha } from './actions'

class Home extends React.Component {

	render() {
		console.log(this.props)
		return (
			<div>
				<div>Home</div>

				<button onClick={ () => { this.props.changeCarninha('costela') }}>Vai costela</button>
				{this.props.carninha}
			</div>
		)
	}
}

const mapStateToProps = (state) => (state)

const mapActionsToProps = {
	changeCarninha
}

export default connect(mapStateToProps, mapActionsToProps)(Home);