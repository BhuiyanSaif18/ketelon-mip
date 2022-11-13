import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';
import { ScheduledInterviewsRoutingModule } from './scheduled-interviews-routing.module';



@NgModule({
  declarations: [ScheduledInterviewsComponent],
  imports: [
    CommonModule,
    ScheduledInterviewsRoutingModule,
    SharedModule
  ]
})
export class ScheduledInterviewsModule { }
