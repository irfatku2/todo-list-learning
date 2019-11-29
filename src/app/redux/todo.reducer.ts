import { createReducer, on } from "@ngrx/store";
import { Todo } from "../pages/todo/models/todo";
import * as TodoPageActions from "./todo.action";
import {initialTodoState, TodoState } from "./todo.state";

export const todoReducer = createReducer(
    initialTodoState,
    on(TodoPageActions.get, (state: TodoState, todos: { todos: Todo[] }) => {
        state.todos = todos.todos;
        return {...state};
    }),
    on(TodoPageActions.update, (state: TodoState, todo: Todo) => {
        state.todos = state.todos.map((t) => {
            if (t.id !== todo.id) {
                return t;
            }
            return {...t, completed: !t.completed};
        });
        return { ...state };
    }),
    on(TodoPageActions.create, (state: TodoState, todo: Todo) => {
        state.todos = [...state.todos, todo];
        return {...state};
    }),
    on(TodoPageActions.del, (state: TodoState, todo: Todo) => {
        state.todos = state.todos.filter((t) => t.id !== todo.id);
        return {...state};
    }),
);

// For light future
// export function reducer(state: TodoState | undefined, action: Action) {
//     return todoReducer(state, action);
// }
