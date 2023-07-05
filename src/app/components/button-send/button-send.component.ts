import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-send',
  templateUrl: './button-send.component.html',
  styleUrls: ['./button-send.component.scss'],
})
export class ButtonSendComponent {
  @Input() buttonName: String = '';
}
