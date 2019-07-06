import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/Models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;
  users:Observable<User[]>;
  userDetailShow: boolean = false;

  user_joined_tests:object;
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.users = this._userService.userList();
    console.log(this.users);
  }

  displayUserDetail(userID: string) {
    this._userService.userDetails(userID).subscribe(response => {
      this.user = response;
      console.log(this.user);

      this.userDetailShow = true;
    }, error => {
      this.userDetailShow = false;
    });
  }

}
