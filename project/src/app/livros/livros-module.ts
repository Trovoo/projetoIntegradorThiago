import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { CadLivro } from './cad-livro/cad-livro';

@NgModule({
  declarations: [CadLivro],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
