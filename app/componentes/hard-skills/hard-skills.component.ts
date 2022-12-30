import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { DatosService } from 'src/app/servicios/datos.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  hardSkills:Habilidad[]=[];
//islogged = false;
//hard-Skills: Hard-Skills []=[]  --y aqui me va a importar el modelo arriba: {Hard-Skills} from 'src/app/model/habilidad';
constructor(private datos:HabilidadService) { }
   

  ngOnInit(): void {
    this.datos.verHabilidades().subscribe(info =>{
      this.hardSkills = info;
    }


    )

  }

}
