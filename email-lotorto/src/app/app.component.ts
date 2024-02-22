import { Component } from '@angular/core';
import { Email } from './email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails: Email[] = [];
  invia(d: HTMLInputElement, o: HTMLInputElement, c: HTMLInputElement):  boolean {
    this.emails.push(new Email(d.value, o.value, c.value));
    return false
  }
}
