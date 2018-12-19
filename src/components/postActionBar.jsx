import React, { Component } from "react";
import Row from "./layout/row";
import Col from "./layout/col-grid";
import Button from "./button";
import Counter from "./counter";
import Comment from "./comment";
import Share from "./shares";
import LikeEmoji from "./likeEmoji";

class PostActionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
      likeHover: false,
      likeIsClicked: false,
      commentIsClicked: false,
      shareIsClicked: false,
    };
  }

  //test
  showEmoji = (event) => {
    event.stopPropagation();
    console.log(event.nativeEvent);
    setTimeout(() => {
      this.setState((prevState) => ({ likeHover: !prevState.likeHover }));
    }, 2000);
  };

  hideEmoji = (event) => {
    event.stopPropagation();
    console.log(event.nativeEvent);
    setTimeout(() => {
      this.setState({
        likeHover: false,
      });
    }, 1000);
  };

  //like increment
  handleLikeCount = () => {
    this.setState((prevState) => ({
      likeCount: prevState.likeCount + 1,
    }));
  };

  //IsClicked?
  likeIsClicked = () => {
    this.setState(
      (prevState) => ({
        likeIsClicked: !prevState.likeIsClicked,
      }),
      this.setState((prevState) => ({
        likeCount: 1,
      }))
    );
  };

  //IsClicked?
  commentIsClicked = () => {
    this.setState((prevState) => ({
      commentIsClicked: !prevState.commentIsClicked,
      shareIsClicked: false,
    }));
  };

  //IsClicked?
  shareIsClicked = () => {
    this.setState((prevState) => ({
      shareIsClicked: !prevState.shareIsClicked,
      commentIsClicked: false,
    }));
  };

  render() {
    console.log(this.state.likeHover);
    return (
      <div className="col-lg-12">
        <div className="container">
          <Row>
            <Col>
              {this.state.likeIsClicked && (
                <Counter counter={this.state.likeCount} />
              )}
            </Col>
            <Col>
              <p>comment count</p>
            </Col>
            <Col>
              <p>shares count</p>
            </Col>
          </Row>

          <LikeEmoji isVisible={this.state.likeHover} />

          <Row id="fbBttons">
            <Col paddingLeft="0" paddingRight="0">
              <Button
                icon="thumbs-up"
                handleClick={this.likeIsClicked}
                onMouseOver={this.showEmoji}
                onMouseOut={this.hideEmoji}
                btn={"Like"}
              />
            </Col>
            <Col paddingLeft="0" paddingRight="0">
              <Button
                icon="comment-alt"
                handleClick={this.commentIsClicked}
                btn={"comment"}
              />
            </Col>
            <Col paddingLeft="0" paddingRight="0">
              <Button
                icon="share"
                handleClick={this.shareIsClicked}
                btn={"share"}
              />
            </Col>
          </Row>

          <Row classes="row postDisplay">
            {this.state.commentIsClicked && (
              <Comment user={this.props.user} maxLetters={140} />
            )}
            {this.state.shareIsClicked && <Share />}
          </Row>
        </div>
      </div>
    );
  }
}

export default PostActionBar;
