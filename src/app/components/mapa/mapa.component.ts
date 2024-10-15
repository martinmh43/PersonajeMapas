import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  imagenes = [
    '/assets/back1.jpg',
    '/assets/back2.jpg',
    '/assets/back3.jpg',
    '/assets/back4.png',
    '/assets/back5.jpg',
    '/assets/back6.jpg'
  ];

   hoveredImageIndex = -1;
  selectedImage: string | null = null;

  constructor(private renderer: Renderer2) {}

  onMouseEnter(imagen: string) {
    this.setBodyBackground(imagen);
  }

  onMouseLeave() {
    if (this.selectedImage) {
      this.setBodyBackground(this.selectedImage);
    } else {
      this.clearBodyBackground();
    }
  }

  onClick(imagen: string) {
    this.selectedImage = imagen;
    this.setBodyBackground(imagen);
  }

  setBodyBackground(imagen: string) {
    this.renderer.setStyle(document.body, 'background-image', `url(${imagen})`);
    this.renderer.setStyle(document.body, 'background-size', 'cover');
    this.renderer.setStyle(document.body, 'transition', 'background 0.3s ease-in-out');
  }

  clearBodyBackground() {
    this.renderer.removeStyle(document.body, 'background-image');
  }

}
