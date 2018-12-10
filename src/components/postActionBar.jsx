import React, { Component } from 'react'
import Button1 from '@material-ui/core/Button'
import ButtonIcon from './buttonIcon'
import Button from './button'
import Counter from './counter'
import Comment from './comment'

class PostActionBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			likeCount: 0,
			likeIsClicked: false,
			commentIsClicked: false,
			shareIsClicked: false
		}
	}

	//like increment
	handleLikeCount = () => {
		this.setState((prevState) => ({
			likeCount: prevState.likeCount + 1
		}))
	}

	//IsClicked?
	likeIsClicked = () => {
		this.setState(
			(prevState) => ({
				likeIsClicked: !prevState.likeIsClicked
			}),
			this.setState((prevState) => ({
				likeCount: 1
			}))
		)
	}

	//IsClicked?
	commentIsClicked = () => {
		this.setState((prevState) => ({
			commentIsClicked: !prevState.commentIsClicked,
			shareIsClicked: false
		}))
	}

	//IsClicked?
	shareIsClicked = () => {
		this.setState((prevState) => ({
			shareIsClicked: !prevState.shareIsClicked,
			commentIsClicked: false
		}))
	}
	render() {
		return (
			<div className="col-lg-12">
				<div className="container">
					<div className="row">
						<div className="col">
							{this.state.likeIsClicked && (
								<Counter counter={this.state.likeCount} />
							)}
						</div>
						<div className="col">
							<p>comment count</p>
						</div>
						<div className="col">
							<p>shares count</p>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<Button
								icon="thumbs-up"
								handleClick={this.likeIsClicked}
								btn={'Like'}
							/>
						</div>
						<div className="col">
							<Button
								icon="comment-alt"
								handleClick={this.commentIsClicked}
								btn={'comment'}
							/>
						</div>
						<div className="col">
							<Button
								icon="share"
								handleClick={this.shareIsClicked}
								btn={'share'}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							{this.state.commentIsClicked && <Comment maxLetters={140} />}
						</div>
						<div>
						<ButtonIcon icon="like" />
							<Button1 size="large" variant="contained" className="theme">
								
								Default
							</Button1>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PostActionBar
