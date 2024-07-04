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
    path: 'analyzes',
    loadComponent: () => import('./features/analyzes.component').then(c => c.AnalyzesComponent)
  },
  {
    path: '',
    redirectTo: 'initalize',
    pathMatch: 'full'
  }
];
