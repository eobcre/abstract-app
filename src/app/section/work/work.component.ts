import { Component, OnInit, Input } from '@angular/core';
import { workData } from 'src/data/workData';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  // workData = workData;

  public buttonApp: string = '';
  public buttonCode: string = '';
  public workData: any = workData;

  ngOnInit() {
    this.buttonApp = 'App';
    this.buttonCode = 'Code';
  }
}
