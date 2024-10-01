import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {

  image = '/images/placeholder.png';
}
