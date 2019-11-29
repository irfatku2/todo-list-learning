import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [
    { id: 1, title: "Buy milk", completed: false },
    { id: 2, title: "Timesheet", completed: false },
    { id: 3, title: "Joker", completed: false },
];

@Injectable()
export class TodoApiService {

    todos = TODOS;

    get(): Observable<Todo[]> {
      return of(this.todos);
    }

    post(todo: Todo): Observable<Todo> {
        const maxArr = this.todos.map(
            (t: Todo) => {
                return t.id;
            });
        const maxId = Math.max.apply(null, maxArr);
        todo.id = maxId + 1;
        this.todos = [...this.todos, todo];
        return of(todo);
    }

    update(todo: Todo): Observable<Todo> {
        this.todos = this.todos.map((t) => {
            if (t.id !== todo.id) {
                return t;
            }
            return { ...todo, completed: !todo.completed };
        });
        return of({...todo, completed: !todo.completed});
    }

    delete(todo: Todo) {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
    }
}
