import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { todoReducer } from "./todo.reducer";

export const reducers: ActionReducerMap<AppState, any> = {
    todoState: todoReducer
};
