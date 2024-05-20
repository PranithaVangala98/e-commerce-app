import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Signupform!: FormGroup;
  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.Signupform = this.formbuilder.group({

    })
  }

}
