import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList$:Observable<User[]> = of([]);
  selectedUser!: User;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userList$ = this.userService.getUserList();
  }

  trackByUserId(index: number, user: User): number {
    return user.id;
  }

  showUserInfo(user: User) {
    this.selectedUser = user;
  }
}
