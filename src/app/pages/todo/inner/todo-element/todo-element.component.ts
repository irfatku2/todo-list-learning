import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
    selector: 'todo-element',
    templateUrl: 'todo-element.component.html',
    styleUrls: ['todo-element.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoElementComponent {
    @Input() todo: Todo;
    @Output() selected = new EventEmitter<Todo>();

    complete() {
        this.selected.emit(this.todo);
    }
}
