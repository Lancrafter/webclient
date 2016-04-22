import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'lc-vote',
    templateUrl: 'lc-vote.html',
    styleUrls: ['./css/lc-vote.css'],
})
export class VoteComponent {
    @Input() points;
    @Input() vote;
    private originalPoints;
    private currentClass;
    private voteWeight;
    private voteClasses;

    @Output() change = new EventEmitter();

    ngOnInit() {
        this.voteWeight = 0;
        this.vote = false;
        this.originalPoints = this.points;
        this.voteClasses = {
            "upvote": "not-selected",
            "downvote": "not-selected"
        }
    }

    onClick(direction) {
        switch(direction){
            case 'up':
                this.calculateUpvote();
                break;
            case 'down':
                this.calculateDownvote();
                break;
        }

        this.points = this.originalPoints + this.voteWeight;
    }

    private calculateUpvote() {
        if(this.voteWeight === 1) {
            this.voteWeight = 0;
            this.voteClasses.upvote = 'not-selected'
            return;
        }

        this.voteWeight = 1;
        this.voteClasses.upvote = 'selected'
        this.voteClasses.downvote = 'not-selected'
    }

    private calculateDownvote() {
        if(this.voteWeight === -1) {
            this.voteWeight = 0;
            this.voteClasses.downvote = 'not-selected'
            return;
        }

        this.voteWeight = -1;
        this.voteClasses.upvote = 'not-selected'
        this.voteClasses.downvote = 'selected'
    }
}
