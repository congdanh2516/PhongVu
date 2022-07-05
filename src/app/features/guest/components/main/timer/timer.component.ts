import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input()deadline : Date;
  day: any;
  hour: any;
  minute: any;
  second: any;

  constructor() { 
    
  }

  ngOnInit(): void {
    let now : Date = new Date();
    let millisBetween = this.deadline.getTime() - now.getTime();
    let dayDiv = Math.floor(millisBetween / (1000 * 3600 * 24));  //days
    let dayMod = millisBetween - dayDiv * (1000 * 3600 * 24); //miliseconds
    let hourDiv = Math.floor(dayMod / (1000 * 3600)); //hours
    let hourMod = dayMod - hourDiv * (1000 * 3600); //miliseconds
    let minuteDiv = Math.floor(hourMod / (1000 * 60)); //minutes
    let minuteMod = hourMod - minuteDiv * (1000 * 60); //miliseconds
    let second = Math.floor(minuteMod / 1000);

    this.day = dayDiv;
    this.hour = hourDiv;
    this.minute = minuteDiv;
    this.second = second;

    setInterval(() => {
      this.second--;
      if (this.second < 0) {
        this.second = 59;
        this.minute--;
        if(this.minute < 0){
          this.minute = 59;
          this.hour--;
          if(this.hour < 0) {
            this.hour = 23;
            this.day--;
            if(this.day < 0){
              alert("Time out")
            }
          }
        }
      }
    }, 1000)
  }
}
