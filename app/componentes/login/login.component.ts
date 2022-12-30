
 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "","","");
  
 
 
 
  constructor(private ruta: Router, private formBuilder: FormBuilder, private autService: AutenticacionService) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        clave:['',[Validators.required,Validators.minLength(4)]],
      })
   }
 
  ngOnInit(): void {
  }
 

get Email(){
   return this.form.get('email');
  }
 
get Clave(){
  return this.form.get('clave');
}
onEnviar(event: Event){
  event.preventDefault;
  this.autService.loginPersona(this.form.value).subscribe(data =>
    {
      console.log("DATA: " + JSON.stringify(data));
    })
    this.ruta.navigate([''])
   
}
 
}