import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './App.component';
import { TodoModule } from './pages/todo/todo.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		CoreModule,
		TodoModule,
		RouterModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
