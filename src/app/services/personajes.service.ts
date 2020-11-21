/* LO QUE VIENE ORIGINALMENTE:
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }
}
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  obtenerPersonajes() {
    // return fetch('http://localhost:3000/libros')
    // return this.http.get<[Libro]>('http://localhost:3000/libros')
    return this.http.get<Personaje>('https://rickandmortyapi.com/api/character/?page=1')
  }
}