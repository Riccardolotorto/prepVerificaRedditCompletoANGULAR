import { Component, Input, HostBinding} from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mails: Email[] = [];
  nascondi: boolean = false;
  @HostBinding('attr.class') cssClass = 'card bg-light mt-3'
  espandi(): boolean {
    this.nascondi = !this.nascondi;
    return false
  }
  speciale(): boolean {
    if (this.cssClass == 'card bg-warning mt-3') {
      this.cssClass = 'card bg-light mt-3';
    } else {
      this.cssClass = 'card bg-warning mt-3';
    }
    return false
  }
}
