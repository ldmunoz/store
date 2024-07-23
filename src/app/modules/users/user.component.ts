import { Component } from '@angular/core';
import {LoginComponent} from "./components/login/login.component";
import {FormGroup} from "@angular/forms";
import {SidenavComponent} from "../../shared/components/sidenav/sidenav.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    LoginComponent,
    SidenavComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userForm!: FormGroup
}
