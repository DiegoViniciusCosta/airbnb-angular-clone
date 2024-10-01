import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent { 

  click() {
    console.log('clicked');
  }
}
