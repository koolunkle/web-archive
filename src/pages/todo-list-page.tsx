import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/queries/use-todos-data";

// const dummyTodos = [
//   {
//     id: 1,
//     content: "Todo 1",
//   },
//   {
//     id: 2,
//     content: "Todo 2",
//   },
//   {
//     id: 3,
//     content: "Todo 3",
//   },
// ];

export default function TodoListPage() {
  // const todos = useTodos();

  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const data = await fetchTodos();
  //     setTodos(data);
  //   } catch (error) {
  //     setError(error as never);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const {
  //   data: todos,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryFn: fetchTodos,
  //   queryKey: ["todos"],
  //   // retry: 0,
  // });

  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩 중입니다...</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
