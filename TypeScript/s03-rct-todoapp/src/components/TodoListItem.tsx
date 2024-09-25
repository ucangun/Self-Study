interface ITodoListItem extends ITodoListFn {
  todo: ITodoType;
}

const TodoListItem: React.FC<ITodoListItem> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return <div>TodoListItem</div>;
};

export default TodoListItem;
