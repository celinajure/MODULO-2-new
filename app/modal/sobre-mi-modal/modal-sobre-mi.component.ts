import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-sobre-mi',
  templateUrl: './modal-sobre-mi.component.html',
  styleUrls: ['./modal-sobre-mi.component.css']
})
export class ModalSobreMiComponent implements OnInit {
  form: FormGroup;
  constructor(private datos: DatosService, private formBuilder: FormBuilder) { 
    //Creamos el grupo de controles para el formulario 
    this.datos.getDatos().subscribe(info => {
      this.datos = info.datos
    })
    this.form = this.formBuilder.group({
      imagen1:['',[Validators.required]],
      imagen2:['',[Validators.required]],
      imagen3:['',[Validators.required]],
      imagen4:['',[Validators.required]],
    nombre:['',[Validators.required]],
    anio:['',[Validators.required]],
   titulo:['',[Validators.required]],
   descripcion:['',[Validators.required]],
    })
  }
  

  ngOnInit(): void {
  }

}
