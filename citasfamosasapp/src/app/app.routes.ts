import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./inicio/inicio.component').then(m => m.InicioComponent)
  },
 {
  path: 'citas',
  loadComponent: () =>
    import('./citas/citas.component').then(m => m.CitasComponent)
},
  {
    path: 'configuracion',
    loadComponent: () =>
      import('./configuracion/configuracion.component').then(m => m.ConfiguracionComponent)
  }
];