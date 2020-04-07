import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../security/AuthService';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticatingUser} from '../../model/AuthenticatingUser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
   userLoginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  login() {
    if (this.userLoginForm.value) {
      const userLoginData: AuthenticatingUser = Object.assign({}, this.userLoginForm.value);
      this.authService.login(userLoginData.username, userLoginData.password)
        .subscribe(
          () => this.router.navigate(['dashboard']),
          (error) => console.log(error),
        );
      this.userLoginForm.reset();
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
