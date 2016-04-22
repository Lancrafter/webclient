import {Component} from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {Component, View, bootstrap} from 'angular2/angular2';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'lc-menu',
    templateUrl: 'lc-menu.html',
    styleUrls: ['./css/lc-menu.css'],
    directives: [ BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, Alert ]
})
export class MenuComponent {
    elementRef: ElementRef;
    private isActive = true;
    private singleModel:string = '1';
    private radioModel:string = 'Middle';
    public checkModel:any = {left: false, middle: true, right: false};

    ngOnInit() {
        console.log('ngOnInit');
    }

    menuSelect($event) {
        console.log('Clicked', $event);
    }
}
