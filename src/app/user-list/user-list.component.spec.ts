import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../services/user.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { User } from '../models/user.model';
import { firstValueFrom } from 'rxjs';
import { By } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';


describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  const mockUsers: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ] as User[];

  const mockUserService = {
    getUserList: jest.fn().mockReturnValue(of(mockUsers))
  }

  const mockDialog = {
    open: jest.fn().mockReturnValue(of([]))
  }

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers:[{ provide : UserService, useValue: mockUserService}, 
        {provide: MatDialog, useValue: mockDialog}
      ],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users from the service', async () => {
    const users =  await firstValueFrom(component.userList$);
      expect(users.length).toEqual(2);
  });

  it('trackByUserId should return user id', () => {
    const user  = { id: 10, name: 'X', email: 'x@example.com' } as User;
    expect(component.trackByUserId(1, user)).toBe(10)
  });

  it('should render mat list with users', () => {
    const matListItem = fixture.debugElement.queryAll(By.css('mat-list-item span'));
    expect(matListItem.length).toEqual(4);
    expect(matListItem[0].nativeElement.textContent).toContain('Alice')
  });

  it('should render show user info button for each user', () => {
    const button = fixture.debugElement.queryAll(By.css('.show-user'));
    expect(button.length).toBe(2);
    expect(button[0].nativeElement.textContent).toContain('Show User Info')
  });

  it('should call show user info button when user click on item', () => {
    const mockUserInfo = jest.spyOn(component, 'showUserInfo')
    const button = fixture.debugElement.queryAll(By.css('.show-user'));
    button[0].nativeElement.click();
    expect(mockUserInfo).toHaveBeenCalledWith(mockUsers[0])
  });

  it('should open uder details dialog with selected user data , on click of user info button', () => {
    mockDialog.open.mockClear();
    component.showUserInfo(mockUsers[0]);
    expect(mockDialog.open).toHaveBeenCalledTimes(1);
     expect(mockDialog.open).toHaveBeenCalledWith(UserDetailsComponent, {
      width:'100%',
      data: {user: mockUsers[0]}
     })
        
  })


});
