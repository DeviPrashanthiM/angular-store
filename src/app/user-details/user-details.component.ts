import { Component, Inject, inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  userForm!: FormGroup;

  private fb = inject(FormBuilder)

  private dialogRef = inject(MatDialogRef<UserDetailsComponent>);

  public data = inject(MAT_DIALOG_DATA);

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
    this.userForm.patchValue(this.data.user);
  }
  ngOnInit(): void {
   if(this.data?.user) {
      this.userFormIntialization();
      this.updateUserData();
    }
  }
  close() {
    this.dialogRef.close();
  }


}
