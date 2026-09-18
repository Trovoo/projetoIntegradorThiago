import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  standalone: false,
  templateUrl: './exercicio10.html',
  styleUrl: './exercicio10.scss',
})
export class Exercicio10 {
  usuario: String = '';
  senha: String =  '';

  mensagemBoasVindas: String = '';

  entrar(): void {
    this.mensagemBoasVindas = `Bem-vindo, ${this.usuario}!`;
  }
}
