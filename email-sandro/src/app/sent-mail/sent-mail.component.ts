import { Component, Input} from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mail !: Email;
  nascondi: boolean = false;
  espandi(): boolean {
    this.nascondi = !this.nascondi;
    return false
  }
}