/* Importar la clase Anuncio */

export class Plantilla {

  /* Agregar el atributo privado anuncio:Anuncio */
  
  /* Agregar los get y set del atributo anuncio */
  

  renderizarPlantilla():string {

    return ` <div class="col-12 col-md-3">
      <div class="card border-secondary mb-3 h-100 my-3">
        <div id="tipo" class="card-header">
          ${this.anuncio.tipo}
        </div>
        <div class="card-body text-secondary">
          <h5 id='titulo' class="card-title">
            ${this.anuncio.titulo}
          </h5>
          <p class="card-text text-justify">
            ${this.anuncio.texto}
          </p>
          <p class="card-text">
            <small id="fecha" class="text-muted">
              ${this.anuncio.fecha}
            </small>
          </p>
          <a href="#" class="btn btn-primary">Contactar</a>
        </div>
        <div class="card-footer text-right">
          <small class="text-muted">
            ${this.anuncio.barrio}
          </small>
        </div>
      </div>

    </div>`
  }
}