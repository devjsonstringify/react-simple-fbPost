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
    const style = {
      border: "1px solid #ccd0d5",
      borderRadius: "50px",
      height: "40px",
      backgroundColor: "#f2f3f5",
      flexBasis: "89%",
    };

    return (
      <React.Fragment>
        <Col col="12">
          <Avatar user={user} />
          <textarea
            style={style}
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
