import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { firestore } from 'firebase';
import { createSecureServer } from 'http2';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Usuario } from './interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public ngFireAuth: AngularFireAuth, public router: Router, public ngFirestore: AngularFirestore) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem("usuario", JSON.stringify(user));
        this.router.navigate(["feed"]);
      }

      else {
        localStorage.setItem("usuario", null);
      }
    });
  }

  get emailUser(): string {
    const user = JSON.parse(localStorage.getItem("usuario"));
    return user.email;
  }

  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }

  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem("usuario");
    });
  }

  SignUpUser(email, password, usuario) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then((result) => {

      this.createUser(result.user.uid, usuario)

    });
  }

  createUser(uid, usuario) {
    const userRef: AngularFirestoreDocument<any> = this.ngFirestore.doc('usuarios/' + uid);
    const userData: Usuario = {
      nome: usuario.nome,
      nick: usuario.nick,
      email: usuario.email,
      nasc: usuario.nasc,
      password: usuario.password,
      celular: usuario.celular,
      cidade: usuario.cidade
    }

    return userRef.set(userData, { merge: true });
  }

}
