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
  user_device_phone = false;
  user_device_tablet = false;
  user_device_computer = false;

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
  }

  addNewUser({value, valid}: {value: User, valid: boolean}) {
    if (valid) {
      this._userService.addNewUser(value);
      console.log(value);
    } else {
      console.log('ERROR');
    }
  }
}
