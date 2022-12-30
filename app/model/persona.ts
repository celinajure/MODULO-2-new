export class Persona {
    id?: number;
    imagen1:string;
    imagen2:string;
    imagen3:string;
    imagen4:string;
    nombre:string;
    apellido:string;
    descripcion:string;
    titulo:string;
    anio:string;
    email:string;
    clave:string;

    constructor(imagen1: string, imagen2: string, imagen3: string, imagen4: string,     nombre: string, apellido: string, descripcion: string, titulo: string, anio: string, email:string, clave:string){

        this.imagen1 = imagen1;
        this.imagen2 = imagen2;
        this.imagen3 = imagen3;
        this.imagen4 = imagen4;
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.titulo = titulo;
        this.anio = anio;
        this.email = email;
        this.clave = clave;
    }

}
