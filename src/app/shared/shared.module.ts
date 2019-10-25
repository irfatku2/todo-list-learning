import { NgModule } from '@angular/core';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		TodoElementComponent,
		TodoListComponent,
	],
	imports: [
		FormsModule,
        CommonModule,
	],
	exports: [
		TodoElementComponent,
		TodoListComponent,
		CommonModule,
	],
	providers: [],
	bootstrap: [],
})
export class SharedModule {}
