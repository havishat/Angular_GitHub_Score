import { Component, OnInit } from '@angular/core';
import { ScoreService } from './../score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  user: string;
  score;
  userexist = false;

  constructor(private _scoreService: ScoreService) { 
  
    //this.score= this._scoreService.scores;
    
  }

  

  onSubmit() {
    this._scoreService.user = this.user;
    //this.score = this._scoreService.error1;
    this._scoreService.retrieveTasks((call) => {
      this.score = call;
      if(call.id) {
        this.userexist = true
        this.score = call.public_repos + call.followers;
        console.log(this.score)
      } else {
        this.userexist = false;
        this.score = null;
      }
      // this.score.public_repos = call;
      // this.score.followers = call;
      
    });
  }

  ngOnInit() {

  }

}
