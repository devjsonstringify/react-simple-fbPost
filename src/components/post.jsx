import React, { Component } from 'react'
import Content from './content'
import Photos from './photos'
import Row from './layout/row'
import Col from './layout/col-grid'

const Post = ({ content, photos }) => {
	return (
		<Col col="lg-12" paddingLeft="0" paddingRight="0">
			<Row>
				<Content user={content} />
				<Photos user={photos} />
			</Row>
		</Col>
	)
}
export default Post
