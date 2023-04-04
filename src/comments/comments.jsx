import React from "react";
import Button from "../button/button";

function Comments({ comments }) {
  return (
    <div>
      <h2>Комментарии</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.author}</b>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      <Button>Показать ещё</Button>
    </div>
  );
}

export default Comments;
