import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnChanges{
  @Input() selectedUser!:User;

  userForm!: FormGroup;

  

  constructor(private fb: FormBuilder) {

  }

  userFormIntialization()  {
    this.userForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      website: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        zipcode: ['']
      }),
      company: this.fb.group({
        name: [''],
        catchPhrase: [''],
        bs: ['']
      })
    }); 
  }

  updateUserData() {
    this.userForm.patchValue(this.selectedUser);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.userForm) {
      this.userFormIntialization();
    }
    if (changes['selectedUser'] && changes['selectedUser'].currentValue) {
     this.selectedUser = changes['selectedUser'].currentValue;
      this.updateUserData();
    }
  }


  ngOnInit(): void {
   if(!this.userForm) {
      this.userFormIntialization();
    }
  }


}
