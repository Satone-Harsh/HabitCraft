import { Component, Output, EventEmitter } from '@angular/core';
import { Habit } from 'src/app/Habit';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  habit:string="";
  desc:string="";
  show:boolean=false;
  habits!:Habit[];
  @Output() habitAdd:EventEmitter<Habit>= new EventEmitter();
  
  
  constructor(){
    const local=localStorage.getItem("habits")
    if(local==null){
      this.habits=[];
    } else{
      this.habits=JSON.parse(local)
    }
}

toggle(){
  this.show= !this.show;
}

onSubmit(){
  const task={
    sno:4,
    habit:this.habit,
    desc:this.desc,
    active:true
  }
  this.habitAdd.emit(task);

  this.habits.push(task);
  this.show=false;
  localStorage.setItem("habits",JSON.stringify(this.habits));
  this.habit = "";
  this.desc = "";
}

habitDelete(habit:Habit){
  this.habits.splice(this.habits.indexOf(habit),1);
  localStorage.setItem("habits",JSON.stringify(this.habits));
}

habitDeactivate(habit:Habit){
  const idx=this.habits.indexOf(habit);
  this.habits[idx].active=false;
  localStorage.setItem("habits",JSON.stringify(this.habits));
  console.log(this.habits);
}

reload(){
  this.habits.forEach(habit => {
    habit.active = true;
  });
  localStorage.setItem("habits",JSON.stringify(this.habits));
}

}
