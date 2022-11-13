import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from './chart/support-chart-data-1';
import { SupportChartData2} from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})
export class DashDefaultComponent implements OnInit {
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
  mockData : MockInterviews[] = [{
    Interviewer : "Saif Bhuiyan",
    InterviewerDesignation : "Senior Angular Developer",
    InterviewerPic : "assets/images/user/avatar-4.jpg",
    Interviewee : "Samuel Adebayo",
    IntervieweeDesignation:"50",
    IntervieweePic:"assets/images/user/avatar-2.jpg",
    Topic : "Senior Angular Developer",
    Date : "10",
    JoiningLink : "5"
  },
  {
    Interviewer : "Ragib Ishraq",
    InterviewerDesignation : "Senior Angular Developer",
    InterviewerPic : "assets/images/user/avatar-5.jpg",
    Interviewee : "Ragib Ishraq",
    IntervieweeDesignation:"40",
    IntervieweePic:"assets/images/user/avatar-3.jpg",
    Topic : "Angular Developer",
    Date : "8",
    JoiningLink : "5"
  },
  {
    Interviewer : "Ashaduzzaman",
    InterviewerDesignation:"Senior .NET Developer",
    InterviewerPic : "assets/images/user/avatar-1.jpg",
    Interviewee : "Mithun Das",
    IntervieweeDesignation:"35",
    IntervieweePic:"assets/images/user/avatar-5.jpg",
    Topic : ".NET Developer",
    Date : "7",
    JoiningLink : "5"
  },
  {
    Interviewer : "Samuel Adebayo",
    InterviewerDesignation:"Senior React Developer",
    InterviewerPic : "assets/images/user/avatar-2.jpg",
    Interviewee : "Mithun Das",
    IntervieweeDesignation:"25",
    IntervieweePic:"assets/images/user/avatar-5.jpg",
    Topic : "Senior React Developer",
    Date : "2",
    JoiningLink : "5"
  }];

  constructor() {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
  }

  ngOnInit() {
  }
  joiningLink(link :string){

  }

}
class MockInterviews {
  Interviewer : string;
  InterviewerDesignation:string;
  InterviewerPic : string;
  Interviewee : string;
  IntervieweeDesignation:string;
  IntervieweePic : string;
  Topic : string;
  Date : string;
  JoiningLink : string
}
