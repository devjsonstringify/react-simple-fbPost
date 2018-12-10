import React, { Component } from 'react'
import Content from './content'
import Photos from './photos'

const Post = ({ content, photos }) => {
	return (
		<div className='col-lg-12'>
			<div className='row'>
				<div className='col-lg-12'>
					<Content user={content} />
				</div>
				<div className='col-lg-12'>
					<Photos user={photos} />
				</div>
			</div>
		</div>
	)
}
export default Post
