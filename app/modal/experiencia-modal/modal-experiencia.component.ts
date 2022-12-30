import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form: FormGroup;

  constructor(private datos: DatosService, private formBuilder: FormBuilder) { 
    //Creamos el grupo de controles para el formulario 
    this.datos.getDatos().subscribe(info => {
      this.datos = info.datos
    })
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      tipo: ['',[Validators.required]],
      telefono: [''],
      email: [''],
      url: ['',[Validators.required]],
      inicioFecha: [''],
      finFecha: [''],
     
      estaHoy:['']
    })
   }
  ngOnInit(): void {
    
  }

  get Tipo(){
    return this.form.get("nombre");
  }
  get Nombre(){
    return this.form.get("tipo");
  }
  get Url(){
    return this.form.get("url");
  }

  }



