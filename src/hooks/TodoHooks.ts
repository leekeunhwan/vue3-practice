import { reactive, toRefs } from "vue";

export interface TodoList {
  id: string;
  text: string;
  done: boolean;
}
interface NewTodoList extends TodoList {}
interface NextTodoList extends TodoList {}

interface State {
  todoList: TodoList[];
  todoText: string;
}

export function useTodo() {
  const state = reactive<State>({
    todoList: [],
    todoText: "",
  });

  const hanldeTextInput = (event: InputEvent): void => {
    state.todoText = (event.target as HTMLInputElement).value;
  };

  const handleTodoAdd = (): void => {
    const newTodoList: NewTodoList = {
      id: `id-${new Date().getTime()}-${(Math.random() * 10000).toFixed(0)}`,
      text: state.todoText,
      done: false,
    };
    state.todoText = "";
    state.todoList.push(newTodoList);
  };

  const hanldeTodoUpdate = (updateTodoList: NextTodoList) => {
    const updateTargetIndex = state.todoList.findIndex(
      (todo: TodoList) => todo.id === updateTodoList.id
    );

    state.todoList[updateTargetIndex] = updateTodoList;
  };

  const handleTodoDelete = (deleteTodo: TodoList) => {
    state.todoList = state.todoList.filter(
      (todo: TodoList) => todo.id !== deleteTodo.id
    );
  };

  return {
    ...toRefs(state),
    hanldeTextInput,
    handleTodoAdd,
    hanldeTodoUpdate,
    handleTodoDelete,
  };
}
