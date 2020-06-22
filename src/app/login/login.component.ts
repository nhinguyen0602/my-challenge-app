import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loading: boolean = false;
  returnUrl: string;

  loginError: string;
  error: {};
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public message: NzMessageService,
  ) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  get email() { return this.validateForm.get('email'); }
  get password() { return this.validateForm.get('password'); }

  submitForm(): void {
    if (this.validateForm.invalid) {
      return;
    }
    localStorage.setItem('currentUser', this.email.value);
    this.validateForm.reset();
  }
}
