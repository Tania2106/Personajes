
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
  URL_API = `https://carr7gbo44pszwt52o6flj6xfi0cwcfn.lambda-url.us-west-2.on.aws/`;
 
  constructor( private http: HttpClient) { }

  getAllPersonajes () {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any)=>data.data.results))
  }
}
