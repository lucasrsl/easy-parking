import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./carro/entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'valor',
    loadChildren: () => import('./valor/valor.module').then( m => m.ValorPageModule)
  },
  {
    path: 'escala',
    loadChildren: () => import('./escala/escala.module').then( m => m.EscalaPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./carro/listar/listar.module').then( m => m.ListarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
