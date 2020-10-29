import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/auth.service';
import { Usuario } from '../shared/interfaces/usuario';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  nome:string;

  constructor(private authService: AuthService, public router: Router) {

  

  }

  ngOnInit() {
    this.nome = this.authService.emailUser;
  }

  
  logout(){
    this.authService.SignOut();
    this.router.navigate(["login"]);
  }

}
