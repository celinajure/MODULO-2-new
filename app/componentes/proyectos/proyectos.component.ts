import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectos:Proyecto[]=[];
  constructor(private datos: ProyectoService) { }

  ngOnInit(): void {
    this.datos.verProyectos().subscribe(info=>{
      this.proyectos = info;
    }
    )
  }

}

