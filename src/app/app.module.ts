import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './fixed/header/header.component';
import { BannerComponent } from './fixed/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './fixed/footer/footer.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ServiceEmployeeComponent } from './components/service-employee/service-employee.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ServicesComponent,
    FooterComponent,
    CommentsComponent,
    ServiceEmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
