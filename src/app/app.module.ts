import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";

import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { HomeModule } from "./home/home.module";
import { LoginComponent } from "./login/login.component";
import { BookdetailsComponent } from "./bookdetails/bookdetails.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    ProfileComponent,

    FooterComponent,
    LoginComponent,
    BookdetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
