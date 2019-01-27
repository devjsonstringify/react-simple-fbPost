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
      // likeIsClicked: false,
      commentIsClicked: false,
      shareIsClicked: false,
    };
  }

  //test
  showEmoji = (event) => {
    event.stopPropagation();
    setTimeout(() => {
      this.setState((prevState) => ({ likeHover: !prevState.likeHover }));
    }, 2000);
  };

  hideEmoji = (event) => {
    event.stopPropagation();
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
    // this.setState(
    //   (prevState) => ({
    //     likeIsClicked: !prevState.likeIsClicked,
    //   }),
    this.setState((prevState) => ({
      likeCount: 1,
    }));
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
    const { user, info } = this.props;
    const { likes, comments, shares } = user;

    const counterRow = {
      borderTop: "1px solid #ccd0d5",
      marginTop: "2px",
    };

    const padding = {
      paddingLeft: "0",
      paddingRight: "0",
    };
    return (
      <Col style={padding}>
        <div className="container">
          <Row id="fb-counters" style={counterRow}>
            <Col paddingLeft="0" paddingRight="0">
              <ul>
                <Counter
                  counter={Object.keys(likes).length}
                  text={Object.keys(likes).length > 1 ? "Likes" : "Like"}
                />
                <Counter
                  counter={Object.keys(comments).length}
                  text={
                    Object.keys(comments).length > 1 ? "Comments" : "Comment"
                  }
                />
                <Counter
                  counter={Object.keys(shares).length}
                  text={Object.keys(shares).length > 1 ? "Shares" : "Share"}
                />
              </ul>
            </Col>
          </Row>

          <LikeEmoji isVisible={this.state.likeHover} />

          <Row id="fbBttons">
            <Col style={padding}>
              <Button
                icon="thumbs-up"
                handleClick={this.likeIsClicked}
                onMouseEnter={this.showEmoji}
                onMouseLeave={this.hideEmoji}
                btn={"Like"}
              />
            </Col>
            <Col style={padding}>
              <Button
                icon="comment-alt"
                handleClick={this.commentIsClicked}
                btn={"Comment"}
              />
            </Col>
            <Col style={padding}>
              <Button
                icon="share"
                handleClick={this.shareIsClicked}
                btn={"Share"}
              />
            </Col>
          </Row>

          {this.state.commentIsClicked && (
            <Row classes="row postDisplay">
              <Comment user={info} maxLetters={140} />
            </Row>
          )}
          {this.state.shareIsClicked && <Share />}
        </div>
      </Col>
    );
  }
}

export default PostActionBar;
