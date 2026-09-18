import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio8',
  standalone: false,
  templateUrl: './exercicio8.html',
  styleUrl: './exercicio8.scss',
})
export class Exercicio8 {
  name: String = '';
  quantidade: number = 0; 
  preco: number = 0;

  get total(): number {
    return this.quantidade * this.preco;
  }
}
