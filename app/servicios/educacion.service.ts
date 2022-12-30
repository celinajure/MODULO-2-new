import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = 'http://localhost:8080/educacion/';
  updateEducacion: any;

  constructor(private http:HttpClient) { }

public verEducaciones(): Observable<Educacion[]>{
return this.http.get<Educacion[]>(this.url+'ver');
}

public verEducacion(id: number): Observable<Educacion> {
  return this.http.get<Educacion>(this.url + 'ver/${id}');
}

public agregarEducacion(edu: Educacion): Observable<any> {
  return this.http.post<any>(this.url + 'new', edu);
}

public editarEducacion(edu: Educacion): Observable<any> {
  return this.http.put<any>(this.url + 'editar', edu);
}

public eliminarEducacion(id: number): Observable<Educacion> {
  return this.http.get<Educacion>(this.url + 'ver/${id}');
}
}
