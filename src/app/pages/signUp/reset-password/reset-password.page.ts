import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetForm!: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordmatch: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.resetForm = this.formbuilder.group({

    })
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword
  }

  resetPassword() {
    let password = this.resetForm.controls['password'].value;
    let confirmPassword = this.resetForm.controls['confirmPassword'].value;
    if (password !== confirmPassword) {
      this.passwordmatch = true;
    } else {
      let data = {
        password: this.resetForm.controls['password'].value,

      }
    }
  }
}
