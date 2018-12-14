import React, { Component } from 'react'
import Avatar from './avatar'
import Info from './info'

const User = ({ user }) => {
	return (
		<div className='col-lg-12'>
			<figure className='figure'>
				<Avatar user={user} />
				<figcaption className='figure-caption'>
					<Info user={user} />
				</figcaption>
			</figure>
		</div>
	)
}

export default User
