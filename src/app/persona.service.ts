import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  get() {
    this.http.get<Persona>('');
  }
}

export interface Persona {

}
