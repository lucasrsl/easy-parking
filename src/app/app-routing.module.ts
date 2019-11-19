import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'entrada',
    loadChildren: () => import('./pages/carro/entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'valor',
    loadChildren: () => import('./pages/valor/valor.module').then( m => m.ValorPageModule)
  },
  {
    path: 'escala',
    loadChildren: () => import('./pages/escala/escala.module').then( m => m.EscalaPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/carro/listar/listar.module').then( m => m.ListarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
