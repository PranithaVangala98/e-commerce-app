import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Loginform!: FormGroup;
  showPassword: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.Loginform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],

    })
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  Login() {

  }
  navigateToResetpassword() {
    this.router.navigate(['/reset-password'])
  }
}
