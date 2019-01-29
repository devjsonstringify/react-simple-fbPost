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
  faGlobeAsia,
  faEllipsisH,
  faSearch,
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
  faKissWinkHeart,
  faEllipsisH,
  faGlobeAsia,
  faSearch
);

const FacebookPost = () => {
  const { info } = Request;
  const Home = () => {
    const main = {
      backgroundColor: "#ffffff",
      borderRadius: "3px",
      paddingTop: "15px",
      paddingBottom: "15px",
      marginTop: "1em",
    };
    return (
      <Main>
        {Request.post.map((user) => {
          return (
            <Col style={main} key={user.id}>
              <User user={user} />
              <Post content={user} photos={user} user={user} />
              <PostActionBar info={info} user={user} comments={user.comments} />
            </Col>
          );
        })}
      </Main>
    );
  };

  return (
    <Router>
      <React.Fragment>
        <Navigation user={info} cssFontcolor="red" />
        <Route path="/" exact component={Home} />
        <Route path="/find-friends" component={FindFriends} />
      </React.Fragment>
    </Router>
  );
};

export default FacebookPost;
