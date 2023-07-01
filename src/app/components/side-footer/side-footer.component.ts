import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-side-footer',
  templateUrl: './side-footer.component.html',
  styleUrls: ['./side-footer.component.scss'],
})
export class SideFooterComponent {
  faLinkedin = faLinkedin;
}
