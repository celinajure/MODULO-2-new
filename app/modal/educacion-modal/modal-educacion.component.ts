import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Educacion } from 'src/app/model/educacion';
import { DatosService } from 'src/app/servicios/datos.service';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  form: FormGroup;
  educaciones: Educacion[]=[];

  constructor(private datos: DatosService, private formBuilder: FormBuilder, private EducacionS:EducacionService) {
    //Creamos el grupo de controles para el formulario 

    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required]],
      nombre: ['',[Validators.required]],
      lugar: [''],
      inicioFecha: [''],
      finFecha: [''],
    })
   }

  ngOnInit(): void {
    this.cargarEducacion();
  }
  get Tipo(){
    return this.form.get("tipo");
  }
  get Nombre(){
    return this.form.get("nombre");
  }
cargarEducacion(): void{
  this.EducacionS.verEducaciones().subscribe(
    data => {
      this.educaciones = data;
    }
  )
}



cargarDetalle(id?:number){
  this.EducacionS.verEducacion(id).subscribe(
    {next : (data) => {
      this.form.setValue(data);
    },
    error: (e) => {
      
      alert("error al modificar")
    },
    complete: () => console.info('complete aqui')
  }
)
}
guardar() {
  console.log("FUNCIONA!!!")
let edu = this.form.value;
console.log()

if (edu.id == '') {
this.EducacionS.agregarEducacion(edu).subscribe(
  data => {
    alert("Su nueva Educación fue añadida correctamente");
    this.cargarEducacion();
    this.form.reset();
  }
  )
} else {
  this.EducacionS.editarEducacion(edu).subscribe(
  data => {
      alert("Educación modificada");
      this.cargarEducacion();
      this.form.reset();
    }
  )
}
}

borrar(id?: number) {
this.EducacionS.eliminarEducacion(id).subscribe(
  {
    next: data => {
      alert("se pudo eliminar satisfactoriamente");
      this.cargarEducacion()
    },
    error: err => {
      console.error(err)
      alert("No se pudo eliminar")
        }
      }
    )
  }
}

      



/*AQUI VAMOS A HACER UN METODO
onCreate(): void{
  const educacion = new Educacion (this.nombre, this.tipo, this.domicilio, this.lugar, this.telefono, this.email, this.estaHoy, this.inicioFecha, this.finFecha);
  this.educacionServicio.save(educacion).subscribe(data=>{alert("Educacion añadida");window.location.reload();
}, err =>{
  alert("falló la carag de su nueva educación, intente nuevamente");window.location.reload();
});

}*/


/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {
  form: FormGroup;

  constructor(private datos: DatosService, private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario 
    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required]],
      nombre: ['',[Validators.required]],
      lugar: [''],
      inicioFecha: [''],
      finFecha: [''],
    })
  }

  ngOnInit(): void {
  }
  get Tipo(){
    return this.form.get("tipo");
  }
  get Nombre(){
    return this.form.get("nombre");
  }
}*/