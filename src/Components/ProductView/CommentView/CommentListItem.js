import { useDispatch } from "react-redux";

const CommentListItem = (props) => {
  const commentDispatcher = useDispatch();

  const deleteButtonClickHandler = () => {
    commentDispatcher({
      type: "delete-comment",
      productId: props.productId,
      id: props.id,
    });
  };

  return (
    <li>
      <p>{props.description}</p>
      <p>{props.date.toISOString()}</p>
      <button onClick={deleteButtonClickHandler}>Delete</button>
    </li>
  );
};

export default CommentListItem;
