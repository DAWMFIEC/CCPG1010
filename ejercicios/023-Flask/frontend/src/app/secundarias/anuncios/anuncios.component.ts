import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../../services/anuncios.service';
import xml2js from 'xml2js';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {	

  _anuncios;

  constructor(private _anunciosService:AnunciosService) { }

  loadAnuncios(): void {
  	this._anunciosService.getAnuncios().subscribe(
  		data => { 
  			console.log(data)
  			this._anuncios = data;
		},
  		err => console.error(err),
  		() => console.log('done loading anuncios')
  	);
  }

  ngOnInit() {
  	this.loadAnuncios();
  }

}
