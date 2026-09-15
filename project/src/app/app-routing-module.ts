import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'livros',
    loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
  },

  {
    path: 'lista-exercicio',
    loadChildren: ()  => import('./lista-exercicio/lista-exercicio-module').then(m => m.ListaExercicioModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
