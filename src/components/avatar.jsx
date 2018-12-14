import React, { Component } from 'react'

const Avatar = ({ user }) => {
	return (
		<React.Fragment>
			<img className='img-responsive' src={user.avatarUrl} alt={user.name} />
		</React.Fragment>
	)
}
export default Avatar
