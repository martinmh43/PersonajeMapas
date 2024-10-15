import { Component, Input } from '@angular/core';
import { Personaje } from 'src/app/models/Personaje.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input() personaje: Personaje;
}
