import React, { Component } from 'react'
import Content from './content'
import Photos from './photos'
import Row from './layout/row'
import Col from './layout/col-grid'

const Post = ({ content, photos }) => {
	return (
		<Col col="lg-12" paddingLeft="0" paddingRight="0">
			<Row>
				<Col col="lg-12">
					<Content user={content} />
				</Col>
				<Col col="lg-12">
					<Photos user={photos} />
				</Col>
			</Row>
		</Col>
	)
}
export default Post
