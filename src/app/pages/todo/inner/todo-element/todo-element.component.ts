import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import { Todo } from "../../models/todo";

@Component({
    selector: "todo-element",
    templateUrl: "todo-element.component.html",
    styleUrls: ["todo-element.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoElementComponent {
    @Input() todo: Todo;
    @Output() selected = new EventEmitter<Todo>();
    @Output() deleted = new EventEmitter<Todo>();

    complete() {
        this.selected.emit(this.todo);
    }

    delete() {
        this.deleted.emit(this.todo);
    }
}
