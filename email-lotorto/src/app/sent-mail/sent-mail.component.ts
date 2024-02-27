import { Component, Input, ViewChild} from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mails: Email[];
  mostraTemplate: boolean = false;
  espandi() : void{
    this.mostraTemplate = true;
  }
  chiudi() : void {
    this.mostraTemplate = false;
  }
}
