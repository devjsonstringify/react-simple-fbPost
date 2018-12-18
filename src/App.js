import React, { Component } from 'react'
import './css/App.css'
import Col from './components/layout/col-grid'
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
		const api = [
			{
				id: 1,
				name: 'Business Insider',
				avatarUrl: 'assets/img/image-user.png',
				userfbURL: 'www.facebook.com',
				content: 'Tech has taken a battering',
				photos: [
					{
						img: 'assets/post-image.jpg',
						alt: 'Business-insider'
					}
				]
			},
			{
				id: 2,
				name: 'Reactjs',
				avatarUrl: 'assets/img/react.png',
				userfbURL: 'www.facebook.com',
				content:
					'Cras semper odio ut ligula eleifend, eget consectetur mauris vehicula. Nulla venenatis est vitae scelerisque efficitur. Nulla tincidunt massa sem. ',
				photos: [
					{
						img: 'https://dummyimage.com/600x400/c21fc2/fff.jpg&text=react',
						alt: 'React-js'
					}
				]
			},
			{
				id: 3,
				name: 'Vue',
				avatarUrl: 'assets/img/vue.png',
				userfbURL: 'www.facebook.com',
				content:
					'Nam efficitur mauris in vestibulum pharetra. Nullam hendrerit placerat posuere. Maecenas in sagittis mauris. Cras a consequat purus. Suspendisse eleifend turpis vel quam luctus, ac varius enim rutrum. Praesent at orci eget nunc hendrerit cursus eu quis risus. Suspendisse quam urna, lacinia a semper vel, gravida sed massa. Nam non. ',
				photos: [
					{
						img: 'https://dummyimage.com/600x400/2e032e/fff.jpg&text=vue',
						alt: 'vue-js'
					}
				]
			},
			{
				id: 4,
				name: 'Angular',
				avatarUrl: 'assets/img/angular.png',
				userfbURL: 'www.facebook.com',
				content:
					'Donec in elit dapibus nulla condimentum hendrerit. In a convallis ante, eu sollicitudin erat. Nunc facilisis iaculis posuere. Fusce vehicula varius enim, eget lobortis nisl semper ut. Vestibulum efficitur, dui id tincidunt posuere, tortor sem elementum est, et placerat erat libero vel justo. Donec eu est et mauris commodo pellentesque pharetra non nisi. Nullam a velit eget mi luctus condimentum. Proin consequat bibendum velit vitae mattis. Donec sem tortor, pellentesque quis feugiat quis, bibendum quis risus. Phasellus molestie justo vitae tempor lacinia. Curabitur sed felis sed nisl ultrices tincidunt. Phasellus condimentum faucibus ultrices. In euismod lorem eget vehicula hendrerit. Vestibulum.',
				photos: [
					{
						img: 'https://dummyimage.com/600x400/e39219/fff.jpg&text=angular',
						alt: 'Angular-js'
					}
				]
			}
		]

		return (
			<React.Fragment>
				{api.map((user) => {
					return (
						<Col
							key={user.id}
							paddingTop="15px"
							paddingBottom="15px"
							marginTop="1em">
							<User user={user} />
							<Post content={user} photos={user} user={user} />
							<PostActionBar user={user} />
						</Col>
					)
				})}
			</React.Fragment>
		)
	}
}

export default FacebookPost
