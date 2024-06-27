import { Component } from '@angular/core';
import {LoginComponent} from "./components/login/login.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    LoginComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userForm!: FormGroup
}
