import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VecinosService {

  constructor(private _http:HttpClient) { }

  getFile() {
  	const _headers = new HttpHeaders();
    const headers = _headers.set('Content-Type', 'text/xml')
  	return this._http.get('assets/vecinos.xml',{headers: _headers,responseType: 'text'});
  }
}
