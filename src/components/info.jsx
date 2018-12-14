import React from 'react'

const Info = ({ user }) => {
	const style = {
		color: '#365899',
		fontWeight: '600'
	}
	return (
		<React.Fragment>
			<p className="h6">
				<a style={style} href={user.userfbURL}>
					{user.name}
				</a>
			</p>
		</React.Fragment>
	)
}

export default Info
