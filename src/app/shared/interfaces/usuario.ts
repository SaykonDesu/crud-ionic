import { Timestamp } from 'rxjs';

export interface Usuario {
    nome: string,
    nick: string,
    email: string,
    nasc: Date,
    password: string,
    celular: number,
    cidade: string

}