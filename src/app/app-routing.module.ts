import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'configuracao', loadChildren: './pages/configuracao/configuracao.module#ConfiguracaoPageModule' },
  { path: 'tipo-saida', loadChildren: './pages/tipo-saida/tipo-saida.module#TipoSaidaPageModule' },
  { path: 'temporizador', loadChildren: './pages/temporizador/temporizador.module#TemporizadorPageModule' },
  { path: 'links', loadChildren: './pages/links/links.module#LinksPageModule' },
  { path: 'addtemporizador', loadChildren: './pages/addtemporizador/addtemporizador.module#AddtemporizadorPageModule' },
  { path: 'configurar', loadChildren: './pages/configurar/configurar.module#ConfigurarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
