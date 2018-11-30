import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint } from './endpoint';
import { Result } from './result';

const baseurl = 'https://swapi.co/api/'
@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  endpoint = new Endpoint

  constructor(
    private http : HttpClient,
  ) { }
  

  swapiSearch( 
    topic,
    term
    ) : Observable<Result[]>{
    return this.http.get<Result[]>(`${baseurl}${topic}/?search=${term}`)
  }
  
}
