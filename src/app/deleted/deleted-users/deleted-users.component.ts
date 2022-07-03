import { Component, OnInit } from '@angular/core';
import { UserSevice } from 'src/app/services/users.service';
UserSevice
@Component({
  selector: 'app-deleted-users',
  templateUrl: './deleted-users.component.html',
  styleUrls: ['./deleted-users.component.css']
})
export class DeletedUsersComponent implements OnInit {
  users:any;
  constructor(private userservice:UserSevice) { }

  ngOnInit(): void {
    this.users=this.userservice.getUsers();
  }

}
