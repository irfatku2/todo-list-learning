import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { switchMap, tap } from "rxjs/operators";
import { AppState } from "../../../redux/app.state";
import { create, del, get, update } from "../../../redux/todo.action";
import { selectTodos } from "../../../redux/todo.selector";
import { Todo } from "../models/todo";
import { TodoApiService } from "./todo.api.service";

@Injectable()
export class TodoService {

    constructor(
        private todoApiSvc: TodoApiService,
        private store: Store<AppState>) {}

    getTodos() {
        return this.todoApiSvc.get().pipe(
            tap((data) => {
                this.store.dispatch(get({todos: data}));
            }),
            switchMap(() => this.store.select(selectTodos))
        );
    }

    createTodo(todo: Todo) {
        this.todoApiSvc.post(todo)
            .subscribe(
            (data: Todo) => {
                this.store.dispatch(create(data));
            }
        );
    }

    updateTodo(todo: Todo) {
        this.todoApiSvc.update(todo).subscribe(
            (data: Todo) => {
                this.store.dispatch(update(data));
            },
        );
    }

    deleteTodo(todo: Todo) {
        this.todoApiSvc.delete(todo);
        this.store.dispatch(del(todo));
    }
}
