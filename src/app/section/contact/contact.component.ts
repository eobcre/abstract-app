import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public buttonSend: String = '';

  ngOnInit() {
    this.buttonSend = 'Send';
  }

  faLinkedin = faLinkedin;
}
