import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service'; 

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
logouts:any;
  constructor(private datos: DatosService) { }

  ngOnInit(): void {
  }

}
