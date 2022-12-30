import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  //isLogged = false;
  educaciones:Educacion[]=[];
  //idEditar:number;
  //isTrue=false;
  // aqui abajo adentro de los parentesis hay que poner: privatre tokenService.TokenService,
  constructor(private datos:EducacionService) { }

  ngOnInit(): void {
    this.datos.verEducaciones().subscribe(info =>{
      this.educaciones = info;
    }
    )
    
    //this.datos.agregarEducacion();

    //this.datos.eliminarEducacion();

    //this.educacionService.verEducaciones().subscribe(data =>{this.educaciones=data});
  }
 // AQUI VENDRÍASN LOS METODOS QUE TRAEMOS DEL SERVICE
 /*idEdit(id:number){
this.istTrue=true;
this:idEditar=id;
 }*/
 /*agregarEducacion(edu: Educacion):void{
  this.educaciones.new().subscribe(info=>{this.educaciones=info});
 }

 eliminarEducacion(id: number).subscribeinfo =>{
      this.educaciones = info;
    }
    )*/
}

