import { Component, OnInit, Input } from '@angular/core';
import { tileLayer, latLng, marker, Marker, circle, polygon, LatLng, icon } from 'leaflet';


@Component({
  selector: 'app-barrios',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.css']
})
export class BarriosComponent implements OnInit {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
    zoom: 12,
    center: latLng(-2.192084, -79.879981)
  };

  @Input() layer:any;
  @Input() showLayer:boolean = false;
  @Input() center:LatLng;
  @Input() zoom:number;
  
  constructor() { }

  ngOnInit() {
    
  }

  move(barrio:number) {
    let coordinates = [latLng(-2.128404, -79.902846),latLng(-2.227159, -79.894034),latLng(-2.176700, -79.842989)]
    this.center =  coordinates[barrio];
    this.zoom = 15;
    this.showLayer = true;

    this.layer = marker(this.center, {
       icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
       })
    });
  }

}
