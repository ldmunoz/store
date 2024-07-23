import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserComponent} from "./modules/users/user.component";
import {SidenavComponent} from "./shared/components/sidenav/sidenav.component";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, SidenavComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MotorcycleWorkshop';
}
