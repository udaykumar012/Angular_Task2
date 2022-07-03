import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { activateroutingcomponents, ActivateRoutingModule } from './active-routing.module';



@NgModule({
  declarations: [
    activateroutingcomponents
  ],
  imports: [
    CommonModule,
    ActivateRoutingModule
  ],
  exports:[
    activateroutingcomponents
  ]
})
export class ActiveModule { }
