import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {
  @Input() label: string = '';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() class: string = '';

  @Output() onClick: EventEmitter<string> = new EventEmitter();

  handleClick(hello: string): void {
    this.onClick.emit(hello);
  }
}
