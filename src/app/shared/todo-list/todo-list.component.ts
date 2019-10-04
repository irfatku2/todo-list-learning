import { Component } from '@angular/core';
import { todos } from 'app/models/todos';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.less']
})
export class TodoListComponent {
    todos = todos;
}
