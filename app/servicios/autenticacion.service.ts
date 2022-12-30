import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://localhost8080/autenticacion/login";
  currentUserSubject: BehaviorSubject<any>;
  sessionStorage:any;

  constructor(private http:HttpClient) {
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
   }
loginPersona(credenciales:any): Observable<any>{
var httpOption={headers:new HttpHeaders({
  'Content-Type':'application/json'
}),}
return this.http.post<any>(this.url, credenciales, httpOption).pipe(map(data => {sessionStorage.setItem('currentUser',JSON.stringify(data));
this.currentUserSubject.next(data);
console.log("Servicio esta corriendo "+ JSON.stringify(data));
return data

}));

}
 get usuarioAutenticado(){
  
  return this.currentUserSubject.value;
 }
}
