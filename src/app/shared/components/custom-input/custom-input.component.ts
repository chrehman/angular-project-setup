import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
})
export class CustomInputComponent {
  @Input() type: string = 'text'; // Input type (text, password, email, etc.)
  @Input() placeholder: string = ''; // Placeholder for the input field
  @Input() value: string = ''; // Initial value for the input field
  @Input() disabled: boolean = false; // Disabled state
  @Input() label: string = ''; // Optional label for the input

  @Output() valueChange: EventEmitter<string> = new EventEmitter(); // Output event to emit the updated value

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value); // Emit the updated value
  }
}
