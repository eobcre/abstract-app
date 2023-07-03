import { Component } from '@angular/core';
import { workData } from 'src/data/workData';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  workData = workData;
}
