import React from 'react'
import Col from './layout/col-grid'

const ShareOption = () => {
	const style = {
		flexDirection: 'column',
		alignContent: 'end'
	}
	return (
		<Col>
			<ul className="nav" style={style}>
				<li className="nav-item">
					<a className="nav-link active" href="http://domain.com">
						Share Now
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="http://domain.com">
						Share...
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="http://domain.com">
						Share as Message
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link " href="http://domain.com">
						Share in Group
					</a>
				</li>
			</ul>
		</Col>
	)
}

export default ShareOption
