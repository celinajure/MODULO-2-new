import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Habilidad} from '../model/habilidad';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url = 'http://localhost:8080/habilidad/';

  constructor(private http:HttpClient) { }

public verHabilidades(): Observable<Habilidad[]>{
return this.http.get<Habilidad[]>(this.url+'ver');
}

public verHabilidad(id: number): Observable<Habilidad> {
  return this.http.get<Habilidad>(this.url + 'ver/habi/${id}');
}

public agregarHabilidad(habi: Habilidad): Observable<any> {
  return this.http.post<any>(this.url + 'new', habi);
}

public editarHabilidad(habi: Habilidad): Observable<any> {
  return this.http.put<any>(this.url + 'edit', habi);
}

public eliminarHabilidad(id: number): Observable<Habilidad> {
  return this.http.get<Habilidad>(this.url + 'ver/habi/${id}');
}



}
