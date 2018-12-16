import React from 'react'
import Col from './layout/col-grid'

const Content = ({ user }) => {
	return (
		<Col>
			<p>{user.content}</p>
		</Col>
	)
}

export default Content
