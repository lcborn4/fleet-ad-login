import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  Submitted: boolean = false;

  ShowMessag: boolean = false;

  message: any;

  model = { firstName: '', lastName: '', dateOfBirth: '' }

  constructor(private router: Router,
    private formBuilder: FormBuilder, ) { }

  ngOnInit() {

    //create the login form consisting of first name, last name and date of birth
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(56)]],
      lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(56)]],
      dateOfBirth: ['', [Validators.required, CustomValidators.forbiddenDateValidator(new Date().toString())]],
    });

  }

  onSubmit(): void {
    this.Submitted = true;
    this.message = "Logging in"

    //added a little pause
    setInterval(() => {
      this.Submitted = false;
      console.log('.value', typeof this.loginForm.get('firstName').value)
      this.router.navigate(['/success', {
        queryParams: {
          firstName: this.loginForm.get('firstName').value,
          lastName: this.loginForm.get('lastName').value,
          dateOfBirth: this.loginForm.get('dateOfBirth').value
        }}]);
    }, 1000);
  }
}
