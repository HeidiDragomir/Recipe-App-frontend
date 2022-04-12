import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  ngOnInit() {}

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe(
      (data) => {
        data = this.signupForm.reset();
        this.router.navigate(['recipes/index']);
        this.handleResponse(data);
      },
      (error) => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    data = 'User Added!';
    alert(data);
  }

  handleError(error: any) {
    error = 'User Already Exist';
    alert(error);
  }
}
