import { Component, OnInit } from '@angular/core';
import {Option} from '../option';
import {VoteRecord} from '../voterecord';
import {OPTIONS} from '../mock-options';
import {VOTERECORDS} from '../mock-voterecords';
//import { currentId } from 'async_hooks';

@Component({
  selector: 'app-option-panel',
  templateUrl: './option-panel.component.html',
  styleUrls: ['./option-panel.component.css']
})
export class OptionPanelComponent implements OnInit {
  randIndex: number;// OPTIONS.length;
  constructor() { }
  toVisit = [];
  Records: VoteRecord[] = VOTERECORDS;
  currentRecord: VoteRecord;
  currentOptions = [];
  selectedOption: Option;
  index: number=0;
  
  refreshOptions(){
    if(this.index <this.toVisit.length-1){
      this.currentRecord = undefined;
      this.selectedOption = undefined;
      this.currentOptions[0] = this.toVisit[this.index];
      this.currentOptions[1] = this.toVisit[this.index +1];
      this.currentRecord = undefined;
      this.index +=2;
    } 
    else{
      window.alert("you have seen all the options. showing you again")
      this.refetch();
    }
  }
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  onSelect(option: Option): void{
    this.selectedOption = option;
  }
  //
  submit(){
    let selected_id = this.selectedOption.id;
    let losing_id: number;
    if(selected_id===this.currentOptions[0].id){
      losing_id = this.currentOptions[1].id;
    }
    else
    {
      losing_id = this.currentOptions[0].id;
    }
    //always put lower id number as option 1:
    var id1: number = selected_id;
    var id2: number = losing_id;
    var id1_delta: number =1;
    var id2_delta: number = 0;
    if (selected_id > losing_id){
      id1= losing_id;
      id2= selected_id;
      id1_delta =0;
      id2_delta = 1;
        
    }

    for (let i =0; i<this.Records.length;i++){

      if(this.Records[i].option1_id == id1 && this.Records[i].option2_id==id2)
      {
          this.Records[i].option1_votes += id1_delta;
          this.Records[i].option2_votes += id2_delta;
          this.currentRecord = this.Records[i];
          return;
        }
    }
    console.log(`current length: ${this.Records.length}`);
    this.Records.push({id:this.Records.length, option1_id:id1, option2_id:id2,
      option1_votes:id1_delta, option2_votes:id2_delta});
      console.log(`new length: ${this.Records.length}`);
      this.currentRecord = this.Records[this.Records.length -1];
      console.log(`currentrecord: ${this.currentRecord}`);
      return;
  }
  refetch(){
    this.toVisit = this.shuffle(OPTIONS);
    this.currentOptions = [this.toVisit[0],this.toVisit[1]];
    this.index =2; 

  }
  ngOnInit() { 
    this.refetch();
  }
  option: Option = {
    id: 1,
    title: "Hands and feet are switched",
    description: "get ready for ankle gloves and wrist socks!",
    timesChosen: 0,
    timesPresented: 0
  };
}
