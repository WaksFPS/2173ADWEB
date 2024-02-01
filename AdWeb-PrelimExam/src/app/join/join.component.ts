import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  institution: string = '';

  onFirstNameChange(event: any): void {
    this.firstName = event.target.value;
  }

  onLastNameChange(event: any): void {
    this.lastName = event.target.value;
  }

  onEmailChange(event: any): void {
    this.email = event.target.value;
  }

  onInstitutionChange(event: any): void {
    this.institution = event.target.value;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
