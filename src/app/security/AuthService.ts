import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {LoginComponent} from '../components/login/login.component';

@Injectable({
  providedIn: 'root',
})
export  class AuthService {

  private loginUrl = 'http://localhost:8081/login';

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    return this.http.post<LoginComponent>(this.loginUrl, {username, password}).pipe(tap(
      (res) => this.setSession(res)
    ));
  }

  private setSession(authResult) {
    localStorage.setItem('token', authResult.data);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') === null ? false : true;
  }
}
