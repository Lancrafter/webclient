import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'lc-like',
    templateUrl: 'lc-like.html',
    styleUrls: ['./css/lc-like.css'],
})
export class LikeComponent {
    @Input() likes;
    @Input() liked;
    private currentClass;

    @Output() change = new EventEmitter();

    ngOnInit() {
        this.liked = false;
        this.setCurrentClass();
    }

    onClick($event) {
        this.liked = !this.liked
        this.change.emit({ newValue: this.liked });
        this.setCurrentClass();
        this.calculateLike();
    }

    private calculateLike() {
        switch(this.liked) {
            case true:
                this.likes++;
                break;
            case false:
                this.likes--;
                break;
        }
    }

    private setCurrentClass() {
        this.likes += this.liked ? 1 : -1
        }
    }
}
