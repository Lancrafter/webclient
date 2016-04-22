import {Component} from 'angular2/core';
import {Component, View, bootstrap} from 'angular2/angular2';
import {MenuComponent} from './menu.component';
import {CoursesComponent} from './courses.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';

@Component({
    selector: 'my-app',
    templateUrl: 'my-app.html',
    directives: [
        MenuComponent,
        CoursesComponent,
        FavoriteComponent,
        LikeComponent,
        VoteComponent
    ]
})
export class AppComponent {
    elementRef: ElementRef;

    post = {
        isFavorite: true,
        isLiked: true
    }

    likes = {
        likes: 10,
        liked: false
    }

    vote = {
        points: 10,
        vote: false
    }

    ngOnInit() {
        console.log('here');
    }
}
