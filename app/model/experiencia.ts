export class Experiencia {
    id?: number;
    nombre: string;
    telefono:string;
    email:string;
    url:string;
    inicioFecha:string;
    finFecha:string;
    tipo:string;
    estaHoy:boolean;

    constructor(nombre: string,
        telefono:string,
        email:string,
        url:string,
        inicioFecha:string,
        finFecha:string,
        tipo:string,
        estaHoy:boolean) {
      
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.url = url;
        this.inicioFecha = inicioFecha;
        this.finFecha = finFecha;
        this.tipo = tipo;
        this.estaHoy = estaHoy;
}

}
