import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Habit } from 'src/app/Habit';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {
  @Input() habit!:Habit;
  @Input() i!:number;
  @Output() deleteHabit:EventEmitter<Habit>= new EventEmitter();
  @Output() deactivateHabit:EventEmitter<Habit>= new EventEmitter();

onClick(habit:Habit){
  console.log("completed clicked");  
  this.deactivateHabit.emit(habit);
}
onClickd(habit:Habit){
  console.log("red clicked");  
  this.deleteHabit.emit(habit);
}
}

// onClick should temporarily deactivate events
// whereas onClickd should permanently delete