import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',
  styleUrl: './exercicio11.scss'
})
export class Exercicio11 {
  nomeProduto: string = 'Mouse Gamer';
  preco: number = 120.00;
  quantidade: number = 1;
  mensagem: string = '';

  aumentar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  calcularTotal(): number {
    return this.preco * this.quantidade;
  }

  adicionarAoCarrinho(): void {
    this.mensagem = `Foram adicionados ${this.quantidade} x ${this.nomeProduto} ao carrinho!`;
  }
}