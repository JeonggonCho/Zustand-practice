import {devtools, persist} from "zustand/middleware";
import {create} from "zustand";

let todoStore = (set) => ({
  todos: [],
  addTodo: (todoText) => set((state) => ({
    todos: [...state.todos, {
      text: todoText,
      id: getId(),
      isCompleted: false
    }]
  })),
  deleteTodo: (todoId) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== todoId)
  })),
  completeTodo: (todoId) => set((state) => ({
    todos: state.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: true
        }
      }
      return todo;
    })
  }))
});

let id = 0;

const getId = () => {
  return id++;
};

todoStore = devtools(todoStore);
todoStore = persist(todoStore, {name: 'todo-storage', getStorage: () => sessionStorage});

export const useTodoStore = create(todoStore);