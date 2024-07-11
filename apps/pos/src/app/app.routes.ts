import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'initalize',
    loadComponent: () => import('./features/initialize.component').then(c => c.InitializeComponent)
  },
  {
    path: 'risk-analyze/documenation',
    loadComponent: () => import('./features/risk-analyse-doc.component').then(c => c.DocumentationComponent)
  },
  {
    path: ':partnerIdentifier/risk-analyze',
    loadChildren: () => import('@myorg/risk-analyze').then(m => m.riskAnalyzeRoutes)
  },
  {
    path: 'risk-analyze',
    resolve: { partnerIdentifier: () => 'P45678912' },
    loadChildren: () => import('@myorg/risk-analyze').then(m => m.riskAnalyzeRoutes)
  },
  {
    path: '',
    redirectTo: 'initalize',
    pathMatch: 'full'
  }
];
