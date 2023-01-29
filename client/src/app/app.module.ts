import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutsModule } from './layouts/layouts.module';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scrollToTop/scrollToTop.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './views/profil/profil.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedMessengerModule } from './shared-messenger/shared-messenger.module';



@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    ScrollToTopComponent,
    ProfilComponent,

  ],

  imports: [
    NgxPaginationModule,

    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedMessengerModule // for pipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
