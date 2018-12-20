import React, { Component } from "react";
import "./css/App.css";
import Col from "./components/layout/col-grid";
import User from "./components/user";
import Post from "./components/post";
import PostActionBar from "./components/postActionBar";
import Api from "./components/apiResponse";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faMehBlank,
  faThumbsUp,
  faShare,
  faCommentAlt,
  faSmile,
  faGrin,
  faAngry,
  faFrown,
  faKissWinkHeart,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faCheckSquare,
  faMehBlank,
  faThumbsUp,
  faCommentAlt,
  faShare,
  faSmile,
  faGrin,
  faAngry,
  faFrown,
  faKissWinkHeart
);

console.log(Api);
class FacebookPost extends Component {
  render() {
    return (
      <React.Fragment>
        {Api.map((user) => {
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
          );
        })}
      </React.Fragment>
    );
  }
}

export default FacebookPost;
