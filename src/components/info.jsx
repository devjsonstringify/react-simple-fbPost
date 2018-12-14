import React from 'react'

const Info = ({ user }) => {
	return (
		<React.Fragment>
			<p className="h6">{user.name}</p>
		</React.Fragment>
	)
}

export default Info
