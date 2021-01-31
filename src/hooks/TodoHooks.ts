import { computed, reactive, toRefs } from "vue";
import TodoList from "../pages/TodoList.vue";

interface TodoList {
  id: string;
  text: string;
  done: boolean;
}
interface NewTodoList extends TodoList {}
interface NextTodoList extends TodoList {}

export function useTodo() {
  const stateAsRefs = reactive({
    todoList: [] as NewTodoList[],
    inputTodoText: "",
  });

  const getTodo = () => stateAsRefs.todoList;
  const getTodoCount = () => stateAsRefs.todoList.length;
  const getInputTodoText = () => stateAsRefs.inputTodoText;

  const inputText = (event: InputEvent) => {
    stateAsRefs.inputTodoText = (event.target as HTMLInputElement).value;
  };

  const addTodo = (newTodoList: NewTodoList) => {
    return [...stateAsRefs.todoList, newTodoList];
  };

  const updateTodo = (updateTodoList: NextTodoList) => {
    const updateTargetIndex = TodoList.findIndex(
      (todo: TodoList) => todo.id === updateTodoList.id
    );

    stateAsRefs.todoList[updateTargetIndex] = updateTodoList;
  };

  const deleteTodo = (deleteTodo: TodoList) => {
    const deleteTargetIndex = TodoList.findIndex(
      (todo: TodoList) => todo.id === deleteTodo.id
    );
    stateAsRefs.todoList.splice(deleteTargetIndex, 1);
  };

  return {
    ...toRefs(stateAsRefs),
    getTodo,
    getTodoCount,
    getInputTodoText,
    inputText,
    addTodo,
    updateTodo,
    deleteTodo,
  };
}
