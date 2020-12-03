import { Component, OnInit } from '@angular/core';
import {Data} from '../../modles/data';
import {MCQdataService} from '../../services/mcqdata.service';
@Component({
  selector: 'app-mcqpage',
  templateUrl: './mcqpage.component.html',
  styleUrls: ['./mcqpage.component.css']
})
export class McqpageComponent implements OnInit {
  thedata:Data={
    userInput:"",
    isCorrect:false
  };
  constructor(private MCQdataService:MCQdataService) { }

  ngOnInit(): void {
  }
  getAnswer(){
    const userInput = this.thedata.userInput;
    const isCorrect = this.thedata.isCorrect;
    this.MCQdataService.savepost({userInput,isCorrect} as Data).subscribe(thedata=>{
      if(thedata.isCorrect){
        alert("The answer is Correct!");
      }
      else{
        alert("Answer is wrong. Try again!");
      }
    });
  }
  newSellection(val:string){
    this.thedata.userInput = val;
  }
}
