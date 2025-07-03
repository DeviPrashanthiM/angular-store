import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList$:Observable<User[]> = of([]);
  selectedUser!: User;

  private dialog = inject(MatDialog);
  private userService = inject(UserService)

  ngOnInit() {
    this.userList$ = this.userService.getUserList();
  }

  trackByUserId(index: number, user: User): number {
    return user.id;
  }

  showUserInfo(user: User) {
   this.dialog.open(UserDetailsComponent, {
    width: '100%',
    data: {user}
   })
  }
}
