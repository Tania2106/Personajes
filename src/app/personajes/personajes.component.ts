import { Component, OnInit } from '@angular/core';
import { PersonajesApiService } from './personajes/shared/personajes-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private personajeSvc: PersonajesApiService){ }
  allPersonajes: Observable<any> | undefined;
  

  ngOnInit(){
    this.getPersonajes();
  
  }
  getPersonajes(){
  this.allPersonajes = this.personajeSvc.getAllPersonajes();
  }
}
