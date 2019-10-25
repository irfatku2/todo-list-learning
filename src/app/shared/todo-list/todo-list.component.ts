import { Component } from '@angular/core';
import { TODOS } from '../../models/todos';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.less']
})
export class TodoListComponent {
    todos = TODOS;
}
