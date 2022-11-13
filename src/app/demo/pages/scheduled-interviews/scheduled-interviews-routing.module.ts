import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduledInterviewsComponent,

  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduledInterviewsRoutingModule { }
