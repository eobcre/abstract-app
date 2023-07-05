import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './section/header/header.component';
import { HomeComponent } from './section/home/home.component';
import { AboutComponent } from './section/about/about.component';
import { WorkComponent } from './section/work/work.component';
import { ContactComponent } from './section/contact/contact.component';
import { FooterComponent } from './section/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonSendComponent } from './components/button-send/button-send.component';
import { ThemeComponent } from './components/theme/theme.component';
import { SideFooterComponent } from './components/side-footer/side-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent,
    ButtonComponent,
    ButtonSendComponent,
    ThemeComponent,
    SideFooterComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, SweetAlert2Module.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
