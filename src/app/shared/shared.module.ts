import { NgModule } from '@angular/core';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TodoElementComponent,
        TodoListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        TodoElementComponent,
        TodoListComponent
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
