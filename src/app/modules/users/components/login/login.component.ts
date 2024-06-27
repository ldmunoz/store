import {Component} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'user-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userForm!: FormGroup;

  login() {

  }

  /** Username input */
  get getUser() {
    return this.userForm.get('user');
  }

  /** Password input */
  get getPassword() {
    return this.userForm.get('pass');
  }
}
