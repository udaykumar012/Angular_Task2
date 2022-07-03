import { Component, OnInit } from '@angular/core';
import { UserSevice } from 'src/app/services/users.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users:any;
  constructor(private userservice:UserSevice) { }

  ngOnInit(): void {
    this.users=this.userservice.getUsers();
  }
  seluser:any;
  onSelect(user: any): void {
    this.seluser = user;
  }

}
