import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  Signupform!: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.Signupform = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    })
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  navigateToLogin() {

  }

}
