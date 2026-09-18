import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-desafio',
  standalone: false,
  templateUrl: './desafio.html',
  styleUrl: './desafio.scss',
})
export class Desafio {
  nome: String = '';
  quantidadeMat: number = 1;
  mensagem: String ='';

  aumentar(): void {
    this.quantidadeMat++;
    this.mandarMensagem();
  }

  diminuir (): void{
    if ( this.quantidadeMat > 1 ) {
      this.quantidadeMat--
      this.mandarMensagem();
    }
  }

  mandarMensagem(): void {
    if (this.nome != ''){
      this.mensagem = `Olá ${this.nome}, você adicionou ${this.quantidadeMat} de materias`
    } else {
      this.mensagem = '';
    }
  }
}
