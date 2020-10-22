import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logIn(email, password){
    this.authService.SignIn(email.value, password.value)
    .then((res) => {
      debugger;

    })
    .catch((error) => {
      debugger;

    })

  }

}
