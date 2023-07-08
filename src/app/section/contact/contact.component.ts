import { Component } from '@angular/core';
import { faLocation, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public buttonSend: String = '';

  ngOnInit() {
    this.buttonSend = 'Hello';
  }

  faLocation = faLocation;
  faEnvelope = faEnvelope;

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
}
