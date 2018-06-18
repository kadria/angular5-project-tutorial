import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  itemCount : number = 4;
  itemBtn : string = "Add the goal here";
  MylifeGoals : string='My first life goal';
  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addGoal(){
    this.goals.push(this.MylifeGoals);
    this.MylifeGoals = ' ';
    this.itemCount = this.goals.length;
  }

}
