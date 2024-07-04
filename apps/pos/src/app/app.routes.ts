import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'initalize',
    loadComponent: () =>
      import('./features/initialize.component').then(
        (c) => c.InitializeComponent
      ),
  },
  {
    path: 'analyse',
    loadComponent: () =>
      import('./features/analyse.component').then((c) => c.AnalyseComponent),
  },
  {
    path: '',
    redirectTo: 'initalize',
    pathMatch: 'full',
  },
];
