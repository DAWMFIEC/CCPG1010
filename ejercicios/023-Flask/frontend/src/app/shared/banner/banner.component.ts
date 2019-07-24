import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  visible:boolean;

  constructor() { 
    this.visible = true;
  }

  ngOnInit() {
  }

  hide(){
    this.visible = false;
  }

}
