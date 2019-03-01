import { Component, OnInit } from '@angular/core';
import {Option} from '../option';
import {OPTIONS} from '../mock-options';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {
  submission: Option =  {
    id: null,
    title: undefined,
    description: undefined,
    timesPresented: 0,
    timesChosen: 0
  };
  constructor() { }

  ngOnInit() {
  }
  submit(titleIn:string, descriptionIn:string){
    this.submission.id = OPTIONS.length;
    this.submission.title = titleIn;
    this.submission.description =descriptionIn;
    let out = Object.assign({}, this.submission)
    OPTIONS.push(out);
    this.clear();
    console.log(`added:${out.title}`);
    window.alert(`successfully added ${titleIn} to deck`);
  }
  clear(){
    this.submission.id = null;
    this.submission.title = undefined;
    this.submission.description = undefined;
  }

}