import {Component, Input} from '@angular/core';

@Component({
    selector: 'c-checkbox',
    templateUrl: 'c-checkbox.component.html',
    styleUrls: ['c-checkbox.component.less']
})
export class CustomCheckboxComponent {
    @Input() active: boolean = false;
}
