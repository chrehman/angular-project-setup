import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './shared/components/custom-button/custom-button.component';
import { CustomInputComponent } from './shared/components/custom-input/custom-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomButtonComponent, CustomInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-project-setup';
  userName: string = '';
  userEmail: string = '';

  onNameChange(value: string): void {
    this.userName = value;
    console.log('Name changed to:', this.userName);
  }

  onEmailChange(value: string): void {
    this.userEmail = value;
    console.log('Email changed to:', this.userEmail);
  }

  handleSubmit(event: string) {
    console.log('submit', event);
  }
}
