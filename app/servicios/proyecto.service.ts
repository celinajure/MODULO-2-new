import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'http://localhost:8080/proyecto/';

  constructor(private http:HttpClient) { }

  public verProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url + 'ver');
  }

  public verProyecto(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url + 'ver/${id}');
  }

  public agregarProyecto(proye: Proyecto): Observable<any> {
    return this.http.post<any>(this.url + 'new', proye);
  }

  public editarProyecto(proye: Proyecto): Observable<any> {
    return this.http.put<any>(this.url + 'edit', proye);
  }

  public eliminarProyecto(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url + 'ver/proye/${id}');
  }
}
