import React, { Component } from "react";
import Col from "./layout/col-grid";
import Avatar from "./avatar";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterCount: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      characterCount: event.target.value.length,
    });
  };

  render() {
    const { characterCount } = this.state;
    const { maxLetters, user } = this.props;
    const textarea = {
      border: "1px solid #ccd0d5",
      borderRadius: "50px",
      maxHeight: "35px",
      overflow: "hidden",
      backgroundColor: "#f2f3f5",
      flexBasis: "92%",
    };

    const circleAvatar = {
      flexBasis: "5%",
      borderRadius: "100%",
      maxWidth: "30px",
      maxHeight: "30px",
    };
    return (
      <React.Fragment>
        <Col col="12">
          <Avatar view={circleAvatar} user={user} />
          <textarea
            style={textarea}
            className="form-control"
            placeholder="Write a comment..."
            onChange={this.handleChange}
          />
          {/* <small>{maxLetters - characterCount} Remaining</small> */}
        </Col>
      </React.Fragment>
    );
  }
}

export default Comment;
