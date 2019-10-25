import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './todo.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [
		TodoComponent,
	],
	imports: [
		SharedModule,
		BrowserModule,
	],
	providers: [],
	bootstrap: [],
})
export class TodoModule {}
