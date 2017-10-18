import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { FormsModule } from '@angular/forms'; 
import { ScoreService } from './score.service'; // <-- Imported
import { HttpModule } from '@angular/http'; // <— Import

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule // <— include in imports array
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
