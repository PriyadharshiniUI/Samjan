import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentService } from 'src/service/comment.service';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    HeaderComponent,
    SideNavbarComponent,
    CountryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    NgbModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
