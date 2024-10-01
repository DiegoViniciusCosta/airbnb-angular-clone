import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent { 
  @Input() label: string = '';
  @Output() click = new EventEmitter<void>();
}
