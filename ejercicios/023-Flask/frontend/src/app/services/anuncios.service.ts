import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private _http:HttpClient) { }

  getAnuncios() {
  	const _headers = new HttpHeaders();
    const headers = _headers.set('Content-Type', 'text/xml')
  	return this._http.get('http://localhost:4800/api/anuncio');
  }
}
