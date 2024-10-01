import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    MenuItemComponent
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent { 

  isOpen = false;

  click() {
    console.log('clicked');
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
