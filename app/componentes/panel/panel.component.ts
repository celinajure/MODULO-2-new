import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Redes } from 'src/app/model/redes';

import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
redes:Redes[]=[];

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
this.datos.getDatos().subscribe(info=>{
  this.redes=info.redes;

}
)
  }

}
