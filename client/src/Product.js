import React from 'react';

export default class Product extends React.Component {

	state = {
		views: 0
	}

	componentWillMount= () => {
		this.setState({
			title : 'Cama de Casal',
			description : 'Cama de Casal Joaquina',
			value : '1045,65'
		})
	}

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>{this.state.description}</p>
				<span>{this.state.value} à vista</span>
				<br />
				<div>
					<small>{this.state.views} visualizações</small>
				</div>
			</div>
		)
	}
}