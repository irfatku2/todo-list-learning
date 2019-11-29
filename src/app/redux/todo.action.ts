import { createAction, props } from "@ngrx/store";
import { Todo} from "../pages/todo/models/todo";

export const get = createAction("[Todo Page] Get", props<{ todos: Todo[] }>());
export const update = createAction("[Todo Page] Update", props<Todo>());
export const create = createAction("[Todo Page] Create", props<Todo>());
export const del = createAction("[Todo Page] Delete", props<Todo>());
