import { Component, inject } from '@angular/core';
import { AuthSevice } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appTitle = 'Angular Concepts';

  private authService = inject(AuthSevice);
  private router = inject(Router);


  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
