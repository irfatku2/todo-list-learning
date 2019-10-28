import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
    @Input() todos: Todo[];

    trackByFn(index, item) {
        return item.id;
    }

    selected($event: Todo) {
        let tmpTodo = this.todos.find(todo => todo.id == $event.id);
        if(tmpTodo) tmpTodo.completed = !tmpTodo.completed;
    }
}
