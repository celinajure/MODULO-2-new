import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-hard-skills',
  templateUrl: './modal-hard-skills.component.html',
  styleUrls: ['./modal-hard-skills.component.css']
})
export class ModalHardSkillsComponent implements OnInit {
  form: FormGroup;

  constructor(private datos: DatosService, private formBuilder: FormBuilder) { 
    //Creamos el grupo de controles para el formulario 
    this.datos.getDatos().subscribe(info => {
      this.datos = info.datos
    })
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min, Validators.max]],

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
  get Porcentaje(){
    return this.form.get("porcentaje");
  }

}
