import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
  form: FormGroup;
  

  constructor(private datos: DatosService, private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario 
    this.datos.getDatos().subscribe(info => {
      this.datos = info.datos
    })
    this.form = this.formBuilder.group({
    numero:[''],
    nombre:['',[Validators.required]],
    telefono:[''],
    email:[''],
    domicilio:[''],
    descripcion:['',[Validators.required]],
    inicioFecha:[''],
    finFecha:[''],
    tipo:['',[Validators.required]],
    estaHoy:[''],
    imagen1:[''],
    imagen2:[''],
    imagen3:[''],
    imagen4:[''],
    imagen5:['']
  })
    
}


  ngOnInit(): void {
    
    
  
  }
  get Nombre(){
    return this.form.get("nombre");
  }
  get Descripcion(){
    return this.form.get("descripcion");
  }
  get Tipo(){
    return this.form.get("tipo");
  }
  
}
