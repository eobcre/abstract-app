import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // theme switch
  public isLightTheme: boolean = true;

  onThemeSwitchChange(): void {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

  // nav smooth scroll
  navSmoothScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    element ? element.scrollIntoView({ behavior: 'smooth' }) : null;
  }
}
