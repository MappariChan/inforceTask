import CommentListItem from "./CommentListItem";

const CommentList = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => (
        <CommentListItem key={comment.id} {...comment} />
      ))}
    </ul>
  );
};

export default CommentList;
