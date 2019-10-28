import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { SharedModule } from '../../shared/shared.module';
import {TodoListComponent} from "./inner/todo-list/todo-list.component";
import {TodoElementComponent} from "./inner/todo-element/todo-element.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
	declarations: [
		TodoComponent,
		TodoListComponent,
		TodoElementComponent
	],
	imports: [
		SharedModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [],
})
export class TodoModule {}
