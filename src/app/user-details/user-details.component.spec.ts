import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { User } from '../models/user.model';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

   const mockUser: User = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  };
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent]
    });
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should intilaize userform on init', () => {
    component.ngOnInit();
    expect(component.userForm).toBeDefined();

    expect(component.userForm.get('name')).toBeTruthy();
  });

   it('should patch user data on ngOnChanges', () => {

      const changes = {
        selectedUser: {
          currentValue: mockUser,
           previousValue: null,
          firstChange: true,
          isFirstChange: () => true
        }
      }

      component.ngOnChanges(changes);
  
      expect(component.userForm.value.email).toBe(mockUser.email)

   });

    it('should patch value when updateUserData is called', () => {
       component.userFormIntialization();
      component.selectedUser = mockUser;
      component.updateUserData();
       expect(component.userForm.value.email).toBe(mockUser.email)

    })
});
