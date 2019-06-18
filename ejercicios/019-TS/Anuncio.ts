/* Para que la clase sea conocida por otro archivos se modifica con export */

export class Anuncio {

  private _tipo: string;
  /* Completar los atributos titulo, texto, fecha y barrio */

  constructor() {
  }

  set tipo(_tipo:string) {this._tipo = _tipo;}
  get tipo() {return this._tipo;}

  /* Completar los get y set de todos los atributos */
}