import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public signupForm!: FormGroup;
  user = new User();
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  signup(): void {
    this.authService.setUser(this.user);
    this.router.navigate(['/login']);
  }
}
