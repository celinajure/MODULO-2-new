import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
redes: any;

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(info =>{
      this.redes = info.redes;
    }


    )
  }

}
