import { Todo } from "../pages/todo/models/todo";

export interface TodoState {
    todos: Todo[];
}

export const initialTodoState: TodoState = {
    todos: []
};
