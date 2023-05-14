
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonajesApiService {
  PUBLIC_KEY = '';
  HASH = ''; 
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=cbccd95e75c5417da8a7b920a58a2a6e&hash=e9aa3aa6dab54a746bb7b271c32efc83
  `;
 
  constructor( private http: HttpClient) { }

  getAllPersonajes () : Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any)=>data.data.results))
  }
}
