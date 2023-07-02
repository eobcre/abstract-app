import { Component } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-side-footer',
  templateUrl: './side-footer.component.html',
  styleUrls: ['./side-footer.component.scss'],
})
export class SideFooterComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
}
