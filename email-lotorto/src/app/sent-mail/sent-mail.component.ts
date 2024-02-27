/*import { Component, HostBinding, Input, ViewChild} from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mails: Email[];
  mostraTemplate: boolean = false;
  @HostBinding('attr.class') cssColor = 'bg bg-light';
  espandi() : void{
    this.mostraTemplate = true;
  }
  chiudi() : void {
    this.mostraTemplate = false;
  }
  speciale(): boolean {
    if (this.cssColor == 'bg bg-warning') {
      this.cssColor = 'bg bg-light';
    } else this.cssColor = 'bg bg-warning';
    return false
  }
}*/
import { Component, Input, HostBinding } from '@angular/core';
import { Email } from '../email.model';


@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mails: Email[];
  @HostBinding('class') cssColor = 'card bg-light mt-3';
  nascondi: boolean = false;
  espandi(): boolean {
    this.nascondi = !this.nascondi;
    return false
  }
  speciale(): boolean {
    if (this.cssColor == 'card bg-warning mt-3') {
      this.cssColor = 'card bg-light mt-3';
    } else this.cssColor = 'card bg-warning mt-3';
    return false
  }
}

