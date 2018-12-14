import React, { Component } from 'react'
import './css/App.css'
import Row from './components/layout/row'
import User from './components/user'
import Post from './components/post'
import PostActionBar from './components/postActionBar'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faCheckSquare,
	faMehBlank,
	faThumbsUp,
	faShare,
	faCommentAlt,
	faSmile,
	faGrin
} from '@fortawesome/free-solid-svg-icons'
library.add(
	faCheckSquare,
	faMehBlank,
	faThumbsUp,
	faCommentAlt,
	faShare,
	faSmile,
	faGrin
)

class FacebookPost extends Component {
	render() {
		const api = {
			author: {
				name: 'Business Insider',
				avatarUrl: 'assets/img/useravatar.jpg'
			},
			post: {
				content: 'Tech has taken a battering',
				photos: ['assets/post-image.jpg']
			}
		}
		return (
			<Row>
				<User user={api.author} />
				<Post content={api.post} photos={api.post} user={api.author} />
				<PostActionBar />
			</Row>
		)
	}
}

export default FacebookPost
