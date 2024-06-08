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
  passwordmatch: boolean = false;

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
  signup() {
    let password = this.Signupform.controls['password'].value;
    let confirmPassword = this.Signupform.controls['confirmPassword'].value;
    if (password !== confirmPassword) {
      this.passwordmatch = true;
    } else {
      if (this.Signupform.valid) {
        let data = {
          firstName: this.Signupform.controls['firstName'].value,
          lastName: this.Signupform.controls['lastName'].value,
          email: this.Signupform.controls['email'].value,
          contactNumber: this.Signupform.controls['contactNumber'].value,
          password: this.Signupform.controls['password'].value,
        }
        console.log('data', data)
      }
    }
  }

}
