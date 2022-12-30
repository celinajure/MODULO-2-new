export class Educacion {
    id?: number;
            nombre: string;
            lugar:string;
            telefono:string;
            email:string;
            domicilio:string;
            inicioFecha:string;
            finFecha:string;
            tipo:string;
            estaHoy:boolean;



            constructor(
                nombre: string,
                lugar:string,
                telefono:string,
                email:string,
                domicilio:string,
                inicioFecha:string,
                finFecha:string,
                tipo:string,
                estaHoy:boolean) {
              
                this.nombre = nombre;
                this.lugar = lugar;
                this.telefono = telefono;
                this.email = email;
                this.domicilio = domicilio;
                this.inicioFecha = inicioFecha;
                this.finFecha = finFecha;
                this.tipo = tipo;
                this.estaHoy = estaHoy;
}
}