import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = 'http://localhost:8080/experiencia/';

  constructor(private http:HttpClient) { }

public verExperiencias(): Observable<Experiencia[]>{
return this.http.get<Experiencia[]>(this.url+'ver');
}


public verExperiencia(id: number): Observable<Experiencia> {
  return this.http.get<Experiencia>(this.url + 'ver/${id}');
}

public agregarExperiencia(expe: Experiencia): Observable<any> {
  return this.http.post<any>(this.url + 'new', expe);
}

public editarExperiencia(expe: Experiencia): Observable<any> {
  return this.http.put<any>(this.url + 'editar', expe);
}

public eliminarExperiencia(id: number): Observable<Experiencia> {
  return this.http.get<Experiencia>(this.url + 'ver/${id}')
};
}
