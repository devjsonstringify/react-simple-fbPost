import React from "react";

const CounterLikeCommentShare = ({ Comments }) => {
  const items = Comments.map((comment) => <li>{comment}</li>);
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default CounterLikeCommentShare;
