export class Proyecto {
    id?: number;
    numero:string;
    nombre: string;
    telefono:string;
    email:string;
    domicilio:string;
    descripcion:string;
    inicioFecha:string;
    finFecha:string;
    tipo:string;
    estaHoy:boolean;
    imagen1:string;
    imagen2:string;
    imagen3:string;
    imagen4:string;
    imagen5:string;
imagenes: any;

    constructor(
        numero:string,
        nombre: string,
        telefono:string,
        email:string,
        domicilio:string,
        descripcion:string,
        inicioFecha:string,
        finFecha:string,
        tipo:string,
        estaHoy:boolean,
        imagen1:string,
        imagen2:string,
        imagen3:string,
        imagen4:string,
        imagen5:string){

            this.numero=numero;
            this.nombre=nombre;
            this.telefono=telefono;
            this.email=email;
            this.domicilio=domicilio;
            this.descripcion=descripcion;
            this.inicioFecha=inicioFecha;
            this.finFecha=finFecha;
            this.tipo=tipo;
            this.estaHoy=estaHoy;
            this.imagen1=imagen1;
            this.imagen2=imagen2;
            this.imagen3=imagen3;
            this.imagen4=imagen4;
            this.imagen5=imagen5;



        }


}
