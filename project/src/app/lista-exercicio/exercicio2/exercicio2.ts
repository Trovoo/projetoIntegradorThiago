import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  standalone: false,
  templateUrl: './exercicio2.html',
  styleUrl: './exercicio2.scss',
})
export class Exercicio2 {
  produto = 'Teclado';
  valor = 150;
  quantidade = 3;
  total = this.valor * this.quantidade;
}
