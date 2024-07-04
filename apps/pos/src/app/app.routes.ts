import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'initalize',
    loadComponent: () => import('./features/initialize.component').then(c => c.InitializeComponent)
  },
  {
    path: 'analyze',
    loadComponent: () => import('./features/analyze.component').then(c => c.analyzeComponent)
  },
  {
    path: ':partnerIdentifier/risk-analyze',
    loadChildren: () => import('@myorg/risk-analyze-lib').then(m => m.riskAnalyzeRoutes)
  },
  {
    path: ':partnerIdentifier/results',
    loadComponent: () => import('./features/results.component').then(c => c.AnalyzeResultsComponent)
  },
  {
    path: '',
    redirectTo: 'initalize',
    pathMatch: 'full'
  }
];
