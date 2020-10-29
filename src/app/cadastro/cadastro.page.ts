import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Usuario } from '../shared/interfaces/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signUp(nome, nick, email, nasc, password, celular, cidade) {

    const userData: Usuario = {
      nome: nome.value,
      nick: nick.value,
      email: email.value,
      nasc: nasc.value,
      password: password.value,
      celular: celular.value,
      cidade: cidade.value
    }


    this.authService.SignUpUser(email.value, password.value, userData);

  }

}
