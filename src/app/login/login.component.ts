import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthSevice } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  errorMessage$!: Observable<string>;
  private fb = inject(FormBuilder);
  private authService = inject(AuthSevice);
  private router = inject(Router)

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:['', [Validators.required]],
      password:['', Validators.required]
    });
  }

  loginUser() {
    const {userName, password} = this.loginForm.value;
    this.authService.login(userName, password).subscribe({
      next: (user) => {
        if(user?.role === 'admin' || user?.role === 'user') {
           this.router.navigate(['dashboard']);
        }
      }, 
      error: (error) => {
        this.errorMessage$ = error;
      }
    })
  }
}
