import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { TodoState } from "./todo.state";

export const selectTodoState = (state: AppState) => state.todoState;

export const selectTodos = createSelector(selectTodoState,
    (state: TodoState) => state.todos);
