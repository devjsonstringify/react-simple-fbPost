import React, { Component } from 'react'
import Button from './button'

class Shares extends Component {
	render() {
		const { icon, btn, handleClick } = this.props
		return (
			<React.Fragment>
				<div class='input-group-prepend'>
					<button
						className='btn btn-outline-secondary dropdown-toggle'
						type='button'
						data-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'>
						Share
					</button>
					<div className='dropdown-menu'>
						<a className='dropdown-item' href='#'>
							Action
						</a>
						<a className='dropdown-item' href='#'>
							Another action
						</a>
						<a className='dropdown-item' href='#'>
							Something else here
						</a>
						<div role='separator' className='dropdown-divider' />
						<a className='dropdown-item' href='#'>
							Separated link
						</a>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Shares

// FIXME: share option not working..
