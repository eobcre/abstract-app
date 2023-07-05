import { Component, OnInit } from '@angular/core';
import { skillData } from 'src/data/skillData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  skillData = skillData;

  public buttonResume: String = '';
  ngOnInit() {
    this.buttonResume = 'Resume';
  }
}
