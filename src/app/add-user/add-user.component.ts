import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator/email-validator.directive';
import { phoneValidator } from '../validators/phone-validator/phone-validator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userGender: string = '';
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  private fb = inject(FormBuilder);

  datePipe = inject(DatePipe);


  userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.min(3)]],
    email: ['', [Validators.required, emailValidator()]],
    phone: ['', [Validators.required, phoneValidator()]],
    country: ['', [Validators.required]],
    topping: ['', [Validators.required]],
    topping1: ['', [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
    status: ['', [Validators.required]],
    addresses: this.fb.array([this.fb.group({
      address1: ['', [Validators.required]],
      address2: [''],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]]
    })])

  });

  get addresses(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  }

  isLastAddress(index: number): boolean {
    return index === this.addresses.length - 1;
  }

  removeNewAddress(i: number) {
    this.addresses.removeAt(i);
  }

  addNewAddress() {
    this.addresses.push(this.fb.group({
      address1: ['', [Validators.required]],
      address2: [''],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]]
    }))
  }

  ngOnInit() {

    this.userForm.statusChanges.subscribe(res => {
      console.log(res);
       this.logFormErrors();
    });
  }

  submitData() {
    this.userForm.value.startDate = this.datePipe.transform(this.userForm.value.startDate, 'dd/mm/yyyy');
    this.userForm.value.endDate = this.datePipe.transform(this.userForm.value.endDate, 'dd/mm/yyyy');
    console.log(this.userForm.value);
  }

  logFormErrors() {
    Object.keys(this.userForm.controls).forEach(key => {
      const control = this.userForm.get(key);
      if (control?.invalid && control?.touched) {
        console.log(`${key} errors:`, control.errors);
      }
    });
  }

  ngOnChanges() {
    console.log(this.userForm)
  }
}
