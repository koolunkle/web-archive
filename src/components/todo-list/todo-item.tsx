import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import type { Todo } from "@/types";
import { Link } from "react-router";
import { Button } from "../ui/button";

export default function TodoItem({ id, content, isDone }: Todo) {
  // const deleteTodo = useDeleteTodo();
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const { mutate: deleteTodo, isPending } = useDeleteTodoMutation();

  const handleDeleteClick = () => {
    // deleteTodo(id);
    deleteTodo(id);
  };

  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          disabled={isPending}
          onChange={handleCheckboxClick}
          type={"checkbox"}
          checked={isDone}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        disabled={isPending}
        onClick={handleDeleteClick}
        variant={"destructive"}
      >
        삭제
      </Button>
    </div>
  );
}
