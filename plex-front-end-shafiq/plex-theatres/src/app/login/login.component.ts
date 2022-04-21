import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.setUser(this.user);
    this.router.navigate(['/']);
  }
  clickSignup(): void {
    this.router.navigate(['signup']);
  }
}
