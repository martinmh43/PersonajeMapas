
export class Personaje {
    imagen: string = "";
    nombre: string = "";
    descripcion: string = "";

    constructor(id: number) {

        switch (id) {
            case 1:
                this.imagen = "/assets/borracho1.gif";
                this.nombre = "Borracho 1";
                this.descripcion = "Esta borracho jaja xd";
                break;

            case 2:
                this.imagen = "/assets/borracho2.gif";
                this.nombre = "Borracho 2";
                this.descripcion = "Llega tarde el bus q loko";
                break;

            case 3:
                this.imagen = "assets/borracho3.gif";
                this.nombre = "Borracho 3";
                this.descripcion = "Awana bum bam bam wiz your badio";
                break;
            default:
                this.imagen = "";
                this.nombre = "No hay imagen lokete";
                this.descripcion = "No hay imagen lokete";
        }
    }

}