import { Routes } from '@angular/router';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';

export const routes: Routes = [
    {path: '', redirectTo: 'produtos-lista', pathMatch: 'full'},
    {path: 'produtos-lista', component: ProdutosListaComponent}
];
