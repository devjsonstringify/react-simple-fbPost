import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FindFriends from "./components/layout/pages/findFriends";
import Navigation from "./components/layout/header/header";
import "./css/App.css";
import Main from "./components/layout/main";
import Col from "./components/layout/col-grid";
import User from "./components/user";
import Post from "./components/post";
import PostActionBar from "./components/postActionBar";
import Request from "./components/apiResponse";
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

const FacebookPost = () => {
  const Home = () => {
    return (
      <Main>
        {Request.map((user) => {
          // console.log(Request.user);
          return (
            <Col
              backgroundColor="#ffffff"
              borderRadius="3px"
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
      </Main>
    );
  };
  return (
    <Router>
      <React.Fragment>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/find-friends" exact component={FindFriends} />
      </React.Fragment>
    </Router>
  );
};

export default FacebookPost;
