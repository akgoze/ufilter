import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  newUser: User;

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
  }

}
