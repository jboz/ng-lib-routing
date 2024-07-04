import { Route } from '@angular/router';
import { MainComponent } from './risk-analyze/main.component';

export const riskAnalyzeRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./risk-analyze/steps.component').then(c => c.StepsComponent)
      }
    ]
  }
];
