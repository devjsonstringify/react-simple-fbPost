import React, { Component } from 'react'
import Content from './content'
import Photos from './photos'
import Row from './layout/row'
import Col from './layout/col-grid'

const Post = ({ content, photos }) => {
	const post = {
		paddingLeft: '0',
		paddingRight: '0'
	}
	return (
		<Col col="lg-12" style={post}>
			<Row>
				<Content user={content} />
				<Photos user={photos} />
			</Row>
		</Col>
	)
}
export default Post
