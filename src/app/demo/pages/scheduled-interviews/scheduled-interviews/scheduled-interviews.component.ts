import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled-interviews',
  templateUrl: './scheduled-interviews.component.html',
  styleUrls: ['./scheduled-interviews.component.scss']
})
export class ScheduledInterviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  joiningLink(){
    window.location.href = "https://video.sebastienbiollo.com/angular-interview-11132022"
  }

}
