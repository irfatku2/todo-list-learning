import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {CustomCheckboxComponent} from "./c-checkbox/c-checkbox.component";

@NgModule({
	declarations: [
		CustomCheckboxComponent
	],
	imports: [
		FormsModule,
        CommonModule
	],
    exports: [
        CommonModule,
        CustomCheckboxComponent
    ],
	providers: [],
	bootstrap: [],
})
export class SharedModule {}
