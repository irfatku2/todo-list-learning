import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "todo-input",
    templateUrl: "todo-input.component.html",
    styleUrls: ["todo-input.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInputComponent {

    @Output() todoTitle = new EventEmitter<string>();
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            todoName: [""],
        });
    }

    addTodo() {
        const { todoName } = this.form.value;
        if (todoName?.trim()) {
            this.todoTitle.emit(todoName);
            this.form.reset();
        }
    }
}
