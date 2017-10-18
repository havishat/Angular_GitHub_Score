import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
@Injectable()
export class ScoreService {
  scores;
  error1;
  user;

  constructor(private _http: Http) { }

  retrieveTasks(callback) {
    this._http.get('https://api.github.com/users/'+this.user).subscribe( 
      (response)=> { this.scores = response.json(); 
      callback(this.scores);
      
      }, 
      
      (error)=> { this.error1 = error; }
    );
  }
 

}

