import { Component, HostBinding, Input} from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mail !: Email;
  nascondi: boolean = false;
  @HostBinding('attr.class') cssClass = "card bg-light"
  espandi(): boolean {
    this.nascondi = !this.nascondi;
    return false
  }
  speciale(): boolean {
    if (this.cssClass == "card bg-warning") {
      this.cssClass = "card bg-light"
    } else {
      this.cssClass = "card bg-warning"
    }
    return false
  }
}
