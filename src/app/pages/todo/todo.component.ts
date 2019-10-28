import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Todo} from "./models/todo";
import {TODOS} from "./models/todos";

@Component({
  selector: 'todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  todos: Todo[] = TODOS;
}
