import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { NextComponent } from './next/next.component';
import { InfoComponent } from './components/info/info.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BarraComponent } from './components/barra/barra.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    NextComponent,
    InfoComponent,
    MapaComponent,
    NotFoundComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
