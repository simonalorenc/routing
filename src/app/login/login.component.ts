import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string 

  constructor(public authService: AuthService) {
    this.message = ''
  }

  login(username: string, password: string): boolean {
    this.message = ''
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.'
      setTimeout(() => {
        this.message = '' 
      }, 2500)
    }
    return false
  }

  logOut(): boolean {
    this.authService.logout()
    return false
  }

}
