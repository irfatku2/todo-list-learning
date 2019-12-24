import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Todo } from "./models/todo";
import { TodoService } from "./services/todo.service";

@Component({
    selector: "todo",
    templateUrl: "todo.component.html",
    styleUrls: ["todo.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit, OnDestroy {
    todos: Todo[];
    todosSub: Subscription;

    constructor(
        private todoSvc: TodoService) {
    }

    ngOnInit() {
        this.todosSub = this.todoSvc.getTodos().subscribe(
            (todos) => this.todos = todos
        );
    }

    ngOnDestroy() {
        this.todosSub.unsubscribe();
    }

    selectTodo($event: Todo) {
        this.todoSvc.updateTodo($event);
    }

    createTodo($event: string) {
        const todo: Todo = {
            title: $event,
            completed: false,
        };
        this.todoSvc.createTodo(todo);
    }

    deleteTodo($event: Todo) {
        this.todoSvc.deleteTodo($event);
    }
}
