import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Post } from './interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public ngStore: AngularFirestore) {}

  getPostsList() {
    const postRef = this.ngStore.collection("posts");
    return postRef;
  }

  setPost(post){
    const postData: Post = {
      nome: "",
      cidade: "", 
      comentario: post.comentario,
      curtida: false
    }
    return this.ngStore.collection("posts").add(postData);
  }

  updatePost(uid, post){
    const postData: Post = {
      nome: post.nome,
      cidade: post.cidade, 
      comentario: post.comentario,
      curtida: post.curtida
    }
    const postRef: AngularFirestoreDocument<any> = this.ngStore.doc("posts/"+uid);
    return postRef.update(postData);
  }

  removePost(uid){
    const postRef: AngularFirestoreDocument<any> = this.ngStore.doc("posts/"+uid);
    return postRef.delete();
  }

}
