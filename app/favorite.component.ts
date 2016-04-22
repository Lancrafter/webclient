import {Component, Input, Output, EventEmitter} from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {Component, View, bootstrap} from 'angular2/angular2';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'lc-favorite',
    templateUrl: 'lc-favorite.html',
    styleUrls: ['./css/lc-favorite.css'],
    directives: [ BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, Alert ]
})
export class FavoriteComponent {
    @Input() selected;
    private currentClass;

    @Output() change = new EventEmitter();

    ngOnInit() {
        this.selected = false;
        this.setCurrentClass();
    }

    onClick($event) {
        this.selected = !this.selected
        this.change.emit({ newValue: this.selected });
        this.setCurrentClass();
    }

    private setCurrentClass() {
        console.log(this.selected);
        switch(this.selected) {
            case true:
                this.currentClass = "glyphicon-star"
                break;
            case false:
                this.currentClass = "glyphicon-star-empty"
                break;
        }
    }
}
