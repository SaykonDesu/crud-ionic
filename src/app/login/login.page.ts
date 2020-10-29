
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  logIn(email, password){
    this.authService.SignIn(email.value, password.value)
    .then((res) => {

    })
    .catch((error) => {
      let msg= "";
      switch(error.code){
        case "auth/invalid-email":
          msg = "Endereço de email inválido, verifique a digitação e tente novamente";
          break;
        case "auth/user-not-found":
          msg = "Usuário inexistente";
          break;
        case "auth/wrong-password":
          msg = "Senha incorreta";
          break;
        default:
          msg = "Email ou senha inválidos";
      }
      window.alert(msg);
    })

  }

}
