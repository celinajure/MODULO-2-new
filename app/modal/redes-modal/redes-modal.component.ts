import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-redes',
  templateUrl: './redes-modal.component.html',
  styleUrls: ['./redes-modal.component.css']
})
export class RedesModalComponent implements OnInit {
  form: FormGroup;

  constructor(private datos: DatosService, private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario 
    this.datos.getDatos().subscribe(info => {
      this.datos = info.datos
    })
    this.form = this.formBuilder.group({
    url:['',[Validators.required]],
   icoFont:['',[Validators.required]],
    })
  }
  ngOnInit(): void {
  }

get Url(){
  return this.form.get("url");
}
get IcoFont(){
  return this.form.get("icoFont");
}
}

