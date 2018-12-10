import React, { Component } from 'react'

class Comment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			characterCount: 0
		}
	}

	handleChange = (event) => {
		this.setState({
			characterCount: event.target.value.length
		})
	}

	render() {
		const { characterCount } = this.state
		const { maxLetters } = this.props
		return (
			<React.Fragment>
				<textarea
					className='form-control'
					placeholder='Write a comment...'
					onChange={this.handleChange}
				/>
				<small>{maxLetters - characterCount} Remaining</small>
			</React.Fragment>
		)
	}
}

export default Comment
