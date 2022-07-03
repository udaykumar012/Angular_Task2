import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { manageroutingcomponents, ManageRoutingModule } from './manage-routing.module';


@NgModule({
  declarations: [manageroutingcomponents],
  imports: [
    CommonModule,ManageRoutingModule
  ],
  exports:[manageroutingcomponents]
})
export class ManageModule { }
