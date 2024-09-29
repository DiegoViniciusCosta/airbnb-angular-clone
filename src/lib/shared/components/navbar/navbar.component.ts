import { Component, EventEmitter, Output } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { LogoComponent } from '../logo/logo.component';
import { SearchComponent } from '../search/search.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ContainerComponent,
    LogoComponent,
    SearchComponent,
    UserMenuComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() onLogoClick = new EventEmitter();
}
