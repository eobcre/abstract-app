import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_31w637e', 'template_wt0avmk', 'q6DwqqAWkgXu5y16O')
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
