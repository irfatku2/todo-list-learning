import { Component, Input } from '@angular/core';
import { Todo } from 'app/models/todo';

@Component({
    selector: 'todo-element',
    templateUrl: 'todo-element.component.html',
    styleUrls: ['todo-element.component.less']
})
export class TodoElementComponent {
    @Input() todo: Todo;
}
