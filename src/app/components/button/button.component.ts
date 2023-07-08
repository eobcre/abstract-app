import { Component, Input } from '@angular/core';
import { workData } from 'src/data/workData';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonName: String = '';

  workData = workData;
}
