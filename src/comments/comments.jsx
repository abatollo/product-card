import React from "react";

import { Ul } from "../elements";
import { CommentsLi, CommentsButton, Name, Text } from "./styled";

function Comments({ comments, onShowMore, allCommentsLength }) {
  return (
    <>
      <Ul>
        {comments.map((comment) => (
          <CommentsLi key={comment.id}>
            <Name>{comment.author}</Name>
            <Text>{comment.text}</Text>
          </CommentsLi>
        ))}
      </Ul>
      {allCommentsLength > comments.length && (
        <CommentsButton onClick={onShowMore}>Показать ещё</CommentsButton>
      )}
    </>
  );
}

export default Comments;
