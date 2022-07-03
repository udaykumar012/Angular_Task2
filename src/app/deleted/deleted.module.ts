import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';
import { deletedroutingcomponents, DeletedRoutingModule } from './deleted-routing.module';



@NgModule({
  declarations: [
    deletedroutingcomponents
  ],
  imports: [
    CommonModule,DeletedRoutingModule
  ],
  exports:[
    deletedroutingcomponents
  ]
})
export class DeletedModule { }
