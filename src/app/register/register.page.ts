import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Register method
  register() {
    this.authService.register(this.email, this.password).then((res) => {
      // Redirect to login page after registration
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      console.error('Registration failed', error);
      // Show error message to the user
    });
  }
}
