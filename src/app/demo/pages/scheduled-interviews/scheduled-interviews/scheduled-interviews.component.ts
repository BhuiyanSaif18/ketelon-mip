import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled-interviews',
  templateUrl: './scheduled-interviews.component.html',
  styleUrls: ['./scheduled-interviews.component.scss']
})
export class ScheduledInterviewsComponent implements OnInit {

  mockData : MockInterviews[] = [{
    Interviewer : "Saif Bhuiyan",
    InterviewerDesignation : "Senior Angular Developer",
    InterviewerPic : "assets/images/user/avatar-4.jpg",
    Interviewee : "Samuel Adebayo",
    IntervieweeDesignation:"Angular Developer",
    IntervieweePic:"assets/images/user/avatar-2.jpg",
    Topic : "Senior Angular Developer",
    Date : "11/13/2022 5.00 PM",
    JoiningLink : "https://video.sebastienbiollo.com/angular-interview-11132022"
  },
  {
    Interviewer : "Saif Bhuiyan",
    InterviewerDesignation : "Senior Angular Developer",
    InterviewerPic : "assets/images/user/avatar-4.jpg",
    Interviewee : "Ragib Ishraq",
    IntervieweeDesignation:"Senior Angular Developer",
    IntervieweePic:"assets/images/user/avatar-3.jpg",
    Topic : "Angular Developer",
    Date : "11/14/2022 5.00 PM",
    JoiningLink : "https://video.sebastienbiollo.com/angular-interview-11142022"
  },
  {
    Interviewer : "Ashaduzzaman",
    InterviewerDesignation:"Senior .NET Developer",
    InterviewerPic : "assets/images/user/avatar-1.jpg",
    Interviewee : "Mithun Das",
    IntervieweeDesignation:".NET Developer",
    IntervieweePic:"assets/images/user/avatar-5.jpg",
    Topic : ".NET Developer",
    Date : "11/14/2022 6.00 PM",
    JoiningLink : "https://video.sebastienbiollo.com/dotnet-interview-11142022"
  },
  {
    Interviewer : "Samuel Adebayo",
    InterviewerDesignation:"Senior React Developer",
    InterviewerPic : "assets/images/user/avatar-2.jpg",
    Interviewee : "Mithun Das",
    IntervieweeDesignation:"React Developer",
    IntervieweePic:"assets/images/user/avatar-5.jpg",
    Topic : "Senior React Developer",
    Date : "11/15/2022 5.00 PM",
    JoiningLink : "https://video.sebastienbiollo.com/react-interview-11152022"
  }];
  constructor() { }

  ngOnInit(): void {
  }
  joiningLink(link : string){
    window.location.href = link;
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
