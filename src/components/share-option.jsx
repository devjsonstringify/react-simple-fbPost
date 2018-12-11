import React from 'react'

const ShareOption = () => {
	return (
		<ul className="nav">
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
	)
}

export default ShareOption
