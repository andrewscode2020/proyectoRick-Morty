import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './services/personajes.service';
import { Personaje } from './interfaces/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  personajes: Personaje = {
    info: {},
    results: []
  };

  constructor(private servicioPersonajes: PersonajesService) { }

  ngOnInit(): void {
    this.cargarPersonajes()
  }

  cargarPersonajes() {
    // La siguiente función la obtengo de PersonajesService:
    this.servicioPersonajes.obtenerPersonajes() 
      .subscribe(
        (personajesConsultados) => {
          this.personajes = personajesConsultados
          // error1:
          // Type 'Personaje' is missing the following properties from type 'Personaje[]': length, pop, push, concat, and 26 more.

          // this.personajes = (personajesConsultados as unknown as Personaje[])
          // error2:
          // Property 'results' does not exist on type 'Personaje[]'.
        },
        (error) => {
          console.error('Error trayendo los personajes:', error)
        }
      )
  }
}