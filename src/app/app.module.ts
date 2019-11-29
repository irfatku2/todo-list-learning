import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "./core/core.module";

import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./App.component";
import { TodoModule } from "./pages/todo/todo.module";
import { reducers } from "./redux/app.redurcer";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		CoreModule,
		TodoModule,
		RouterModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument()
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
