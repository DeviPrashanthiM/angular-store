import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable, of } from 'rxjs';
import { User, UserState } from '../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Store } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { GetUsersAction } from '../store/user/user.action';
import { selectErrorMsg, selectUserList, selectUserLoading } from '../store/user/user.selector';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList$!:Observable<User[]>;
  loading$ = of(true);
  error$!:Observable<string | null>;
  addUser = false;
  private dialog = inject(MatDialog);
  private userService = inject(UserService);

  private store = inject(Store);

  ngOnInit() {

     // Dispatch action to fetch users
   this.store.dispatch(new GetUsersAction());

   // Select data from store
   this.userList$ = this.store.select(selectUserList);
   this.loading$ = this.store.select(selectUserLoading);
   this.error$ = this.store.select(selectErrorMsg);

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
