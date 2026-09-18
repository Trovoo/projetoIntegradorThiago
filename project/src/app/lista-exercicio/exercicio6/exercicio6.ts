import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: false,
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.scss',
})
export class Exercicio6 {
  contador = 0;

  mais() {
    this.contador++
  }

  descurtir() {
    if (this.contador > 0) {
    this.contador--;
  }
  }
}
