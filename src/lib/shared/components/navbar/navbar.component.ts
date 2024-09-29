import { Component, EventEmitter, Output } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ContainerComponent,
    LogoComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() onLogoClick = new EventEmitter();
}
