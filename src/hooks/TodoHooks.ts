import { reactive, toRefs, watchEffect } from "vue";

export interface TodoList {
  id: string;
  text: string;
  done: boolean;
}
interface NewTodoList extends TodoList {}
interface NextTodoList extends TodoList {}

export function useTodo() {
  const stateAsRefs = reactive({
    todoList: [
      {
        id: "1213",
        text: "hi there",
        done: false,
      },
    ],
    inputTodoText: "",
  });

  watchEffect(() => {
    console.log("stateAsRefs.todoList", stateAsRefs.todoList);
    console.log("stateAsRefs.inputTodoText", stateAsRefs.inputTodoText);
  });

  const hanldeTextInput = (event: InputEvent): void => {
    stateAsRefs.inputTodoText = (event.target as HTMLInputElement).value;
  };

  const handleTodoAdd = (): void => {
    const newTodoList = {
      id: `id-${new Date().getTime()}-${(Math.random() * 10000).toFixed(0)}`,
      text: stateAsRefs.inputTodoText,
      done: false,
    };

    stateAsRefs.inputTodoText = "";
    stateAsRefs.todoList.push(newTodoList);
  };

  const hanldeTodoUpdate = (updateTodoList: NextTodoList) => {
    const updateTargetIndex = TodoList.findIndex(
      (todo: TodoList) => todo.id === updateTodoList.id
    );

    stateAsRefs.todoList[updateTargetIndex] = updateTodoList;
  };

  const handleTodoDelete = (deleteTodo: TodoList) => {
    const deleteTargetIndex = TodoList.findIndex(
      (todo: TodoList) => todo.id === deleteTodo.id
    );
    stateAsRefs.todoList = stateAsRefs.todoList.filter(
      (todo: TodoList) => todo.id !== deleteTodo.id
    );
  };

  return {
    ...toRefs(stateAsRefs),
    hanldeTextInput,
    handleTodoAdd,
    hanldeTodoUpdate,
    handleTodoDelete,
  };
}
