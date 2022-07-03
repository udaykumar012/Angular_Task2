import { Component, OnInit } from '@angular/core';
import { UserSevice } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users:any
  constructor(private userservice:UserSevice) { }

  ngOnInit(): void {
    this.users=this.userservice.getUsers();
  }

}
