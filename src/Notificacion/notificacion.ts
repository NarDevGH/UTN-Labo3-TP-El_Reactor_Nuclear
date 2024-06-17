
export default class Notificacion{
    private contenido: string

    constructor(contenido:string){
        this.contenido = contenido;
    }

    public getContenido():string{
        return this.contenido;
    }

}

