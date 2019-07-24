import { Component, OnInit } from '@angular/core';
import { VecinosService } from '../../services/vecinos.service';
import xml2js from 'xml2js';

@Component({
  selector: 'app-vecinos',
  templateUrl: './vecinos.component.html',
  styleUrls: ['./vecinos.component.css']
})
export class VecinosComponent implements OnInit {

   _vecinos: any[] = [];

  constructor(private _vecinosService:VecinosService) {
  	
  }

  loadVecinos(): void {
  	this._vecinosService.getFile().subscribe(
  		data => { 
  			let jsonVecinos;
  			xml2js.parseString(data, function (err, result) {
		        //console.log(result);
		        jsonVecinos = result
		    });
		    this._vecinos = jsonVecinos["VECINOS"]["VECINO"];
		},
  		err => console.error(err),
  		() => console.log('done loading vecinos')
  	);
  }

  ngOnInit() {
  	this.loadVecinos();
  }

}
