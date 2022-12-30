import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  url = 'http://localhost:8080/redes/';

  constructor(private http:HttpClient) { }

public verRedes(): Observable<Redes[]>{
return this.http.get<Redes[]>(this.url+'ver');
}

public verRed(id:number): Observable<Redes>{
  return this.http.get<Redes>(this.url+'ver/${id}');
}

public agregarRed(red: Redes): Observable<any> {
  return this.http.post<any>(this.url + 'new', red);
}

public editarRed(red: Redes): Observable<any> {
  return this.http.put<any>(this.url + 'edit', red);
}

public eliminarRed(id: number): Observable<Redes> {
  return this.http.get<Redes>(this.url + 'ver/red/${id}');
}

}
