import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "../../models/todo";

@Component({
    selector: "todo-list",
    templateUrl: "todo-list.component.html",
    styleUrls: ["todo-list.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
    @Input() todos: Todo[];
    @Output() select = new EventEmitter<Todo>();
    @Output() delete = new EventEmitter<Todo>();

    trackByFn(index, item) {
        return item.id;
    }
}
