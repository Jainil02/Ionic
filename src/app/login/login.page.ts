import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Login method
  login() {
    this.authService.login(this.email, this.password).then((res) => {
      // Redirect to home page after login
      this.router.navigateByUrl('/home');
    }).catch((error) => {
      console.error('Login failed', error);
      // Show error message to the user
    });
  }
}
