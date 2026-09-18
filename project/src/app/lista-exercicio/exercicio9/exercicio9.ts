import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.scss',
})
export class Exercicio9 {
  produto: string = 'Teclado Mecanico';
  contador = 0;

  mais() {
    this.contador++;
  }

  descurtir() {
    if (this.contador > 0) {
      this.contador--;
    }
  }
}