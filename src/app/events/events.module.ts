import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EventsListComponent],
  imports: [
    CommonModule,

  ]
})
export class EventsModule { }
