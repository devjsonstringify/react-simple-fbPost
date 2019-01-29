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
    // this.setState((prevState) => ({
    //   likeCount: prevState.likeCount + 1,
    // }));
  };

  //LIKE
  likeIsClicked = (e, props) => {
    this.setState((prevState) => ({
      likeIsClicked: !prevState.likeIsClicked,
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

    const totalLikes = Object.keys(likes).length;
    const totalComments = Object.keys(comments).length;
    const totalShares = Object.keys(shares).length;

    return (
      <Col style={padding}>
        <div className="container">
          <Row id="fb-counters" style={counterRow}>
            <Col paddingLeft="0" paddingRight="0">
              <ul>
                {this.state.likeIsClicked ? (
                  <Counter
                    text={
                      totalLikes > 1
                        ? "You and " + totalLikes + " " + "others"
                        : "You and " + totalLikes
                    }
                  />
                ) : (
                  <Counter
                    counter={totalLikes}
                    text={totalLikes > 1 ? "Likes" : "Like"}
                  />
                )}

                <Counter
                  counter={totalComments}
                  text={totalComments > 1 ? "Comments" : "Comment"}
                />
                <Counter
                  counter={totalShares}
                  text={totalShares > 1 ? "Shares" : "Share"}
                />
              </ul>
            </Col>
          </Row>

          <LikeEmoji isVisible={this.state.likeHover} />

          <Row id="fbBttons">
            <Col style={padding}>
              <Button
                icon="thumbs-up"
                handleClick={(e) => this.likeIsClicked(totalLikes)}
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
              <Comment user={info} maxLetters={140} comments={comments} />
            </Row>
          )}
          {this.state.shareIsClicked && <Share />}
        </div>
      </Col>
    );
  }
}

export default PostActionBar;
