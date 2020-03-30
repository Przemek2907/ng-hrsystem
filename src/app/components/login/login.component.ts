import {Component} from '@angular/core';
import {AuthService} from '../../security/AuthService';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private username: string;
  private password: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password)
        .subscribe(
          () => this.router.navigate(['dashboard']),
          (error) => console.log(error),
        );
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.username = '';
    this.password = '';
  }
}
