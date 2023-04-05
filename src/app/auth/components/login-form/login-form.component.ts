import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { faPen, faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faSpinner = faSpinner;

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });

  loading = false;
  disabled = false;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  login() {
    if (this.form.valid) {
      this.loading = true;
      const { email, password } = this.form.getRawValue();
      console.log('email: ', email);
      console.log('password: ', password);
    } else {
      this.form.markAllAsTouched();
      this.loading = false;
    }
  }

}
