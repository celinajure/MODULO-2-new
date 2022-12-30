import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) { }

  public verPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url + 'ver/persos');
  }

  public verPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + 'ver/perso/${id}');
  }

  public agregarPersona(per: Persona): Observable<any> {
    return this.http.post<any>(this.url + 'new', per);
  }

  public editarPersona(per: Persona): Observable<any> {
    return this.http.put<any>(this.url + 'edit', per);
  }

  public eliminarPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + 'ver/perso/${id}');
  }
}



