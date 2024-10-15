import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  {path: '', component:PersonajesComponent},
  {path: 'personajes', component:PersonajesComponent},
  {path: 'mapas', component: MapaComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
