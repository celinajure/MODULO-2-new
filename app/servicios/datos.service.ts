import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  verProyectos() {
    throw new Error('Method not implemented.');
  }
  verExperiencias() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

// vamos a crear un metodo para que el servicio tome los datos
getDatos ():Observable<any>{
return this.http.get('./assets/db/baseDeDatosCelina.json');

}

}
