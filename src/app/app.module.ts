import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PopupComponent } from './popup/popup.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    PopupComponent,
    GridItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxNavbarModule,
    BrowserAnimationsModule,
    NgSelectModule,
    CollapseModule
  ],
  exports: [
    NgSelectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
