import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  @Output() onClick = new EventEmitter();
}
