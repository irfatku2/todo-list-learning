import {CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { TodoElementComponent } from "./inner/todo-element/todo-element.component";
import { TodoInputComponent } from "./inner/todo-input/todo-input.component";
import { TodoListComponent } from "./inner/todo-list/todo-list.component";
import { TodoApiService } from "./services/todo.api.service";
import { TodoService } from "./services/todo.service";
import { TodoComponent } from "./todo.component";

@NgModule({
	declarations: [
		TodoComponent,
		TodoListComponent,
		TodoElementComponent,
		TodoInputComponent,
	],
	imports: [
		SharedModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [
		TodoService,
		TodoApiService
	],
	bootstrap: [],
})
export class TodoModule {}
