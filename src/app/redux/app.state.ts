import {initialTodoState, TodoState} from "./todo.state";

export interface AppState {
    todoState: TodoState;
}

export const initialAppState: AppState = {
    todoState: initialTodoState
};
