import React, { Component } from "react";
import Col from "./layout/col-grid";
import Avatar from "./avatar";
import Row from "./layout/row";

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
    const { user, comments } = this.props;
    const textarea = {
      border: "1px solid #ccd0d5",
      borderRadius: "50px",
      maxHeight: "35px",
      overflow: "hidden",
      backgroundColor: "#f2f3f5",
      flexBasis: "92%",
      fontSize: "13px",
    };

    const circleAvatar = {
      flexBasis: "5%",
      borderRadius: "100%",
      maxWidth: "30px",
      maxHeight: "30px",
    };

    const commentWrapper = {
      padding: "0",
      width: "100%",
      margin: "2% auto",
    };

    const ul = {
      listStyle: "none",
      padding: "0",
      width: "100%",
      height: "auto",
    };

    const li = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    };

    const comCol = {
      background: "#f2f3f5",
      padding: "10px",
      borderRadius: "18px",
      lineHeight: "16px",
      position: "relative",
      wordBreak: "break-word",
      width: "100%",
      color: "#1c1e21",
      margin: "2% auto 0",
      flexBasis: "90%",
      fontSize: "13px",
    };
    return (
      <React.Fragment>
        <Row style={{ display: "block" }}>
          <Col style={{ display: "flex", justifyContent: "space-between" }}>
            <Avatar view={circleAvatar} user={user} />
            <textarea
              style={textarea}
              className="form-control"
              placeholder="Write a comment..."
              onChange={this.handleChange}
            />
          </Col>

          <Col style={commentWrapper}>
            <ul style={ul}>
              {comments.map((key) => {
                return (
                  <Col key={key.id}>
                    <li style={li}>
                      <Avatar view={circleAvatar} user={key} />
                      <p style={comCol}>
                        <span>{key.comment}</span>
                      </p>
                    </li>
                  </Col>
                );
              })}
            </ul>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Comment;
