import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { BarriosComponent } from './secundarias/barrios/barrios.component';
import { VecinosComponent } from './secundarias/vecinos/vecinos.component';
import { MainComponent } from './index/main/main.component';

import { Routes, RouterModule } from '@angular/router';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import {HttpClientModule} from '@angular/common/http';
import {VecinosService } from './services/vecinos.service';


const rutas: Routes = [
 { path: '', component: MainComponent },
 { path: 'barrios', component: BarriosComponent },
 { path: 'vecinos', component: VecinosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BarriosComponent,
    VecinosComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    LeafletModule.forRoot(),
    HttpClientModule
  ],
  providers: [VecinosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
