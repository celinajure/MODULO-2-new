import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modales: any;
Tipo: any;
Nombre: any;
form: FormGroup<any>;

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    
  }
  }



