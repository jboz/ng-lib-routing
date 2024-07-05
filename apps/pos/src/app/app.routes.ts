import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'initalize',
    loadComponent: () => import('./features/initialize.component').then(c => c.InitializeComponent)
  },
  {
    path: ':partnerIdentifier/risk-analyze',
    loadChildren: () => import('@myorg/risk-analyze').then(m => m.riskAnalyzeRoutes)
  },
  {
    path: 'risk-analyze/documenation',
    loadComponent: () => import('./features/risk-analyse-doc.component').then(c => c.DocumentationComponent)
  },
  {
    path: '',
    redirectTo: 'initalize',
    pathMatch: 'full'
  }
];
