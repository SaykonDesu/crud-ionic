import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/auth.service';
import { Usuario } from '../shared/interfaces/usuario';
import { CrudService } from './../shared/crud.service';
import { Post } from './../shared/interfaces/post';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  nome: string;
  arrPosts = [];

  constructor(private authService: AuthService, public router: Router, public crudService: CrudService) {



  }

  ngOnInit() {
    this.nome = this.authService.emailUser;

    let postRes = this.crudService.getPostsList();
    postRes.snapshotChanges().subscribe(res => {

      this.arrPosts = [];
      res.forEach(item => {
        let postData = item.payload.doc.data();
        postData['$key'] = item.payload.doc.id;

        this.arrPosts.push(postData as Post);

      })

    })

  }

  onFormSubmit(form){
    if(!form.valid){
      return false;
    }
    else {
      this.crudService.setPost(form.value).then( res => {
        form.reset();

      }).catch(error => console.log(error));
    }
  }

  logout() {
    this.authService.SignOut();
    this.router.navigate(["login"]);
  }

}
