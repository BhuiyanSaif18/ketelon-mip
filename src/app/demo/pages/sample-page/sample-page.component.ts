import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  play(){
    window.location.href = "https://play.typeracer.com/?rt=nm5chhwu4";
  }
}
