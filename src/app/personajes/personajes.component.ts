import { Component} from '@angular/core';
import { Personaje } from '../models/Personaje.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  

  selection: number = 0;


  pulsar() {
    this.selection = (this.selection + 1) % this.personajes.length; 
  }
 

  personajes:Personaje[]=[];

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.personajes[i] = new Personaje(i + 1);
    }
  }
  

  cambiarSeleccion(): number {
    if(this.selection <2){
      this.selection++;
    } else 
      this.selection = 0;
    return this.selection;
  }

}
