import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from './security/AuthInterceptor';
import {AppRoutesModule} from './app-routes.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutesModule, MatSidenavModule, BrowserAnimationsModule,
    MatCheckboxModule, LayoutModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, FontAwesomeModule],
  declarations: [LoginComponent, MainNavComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [LoginComponent, MainNavComponent]
})
export class AppModule {

}
