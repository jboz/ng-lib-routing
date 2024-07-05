import { Route } from '@angular/router';
import { MainComponent } from './risk-analyze/main.component';
import { RiskAnalyzeStore } from './risk-analyze/risk-analyze.store';

export const riskAnalyzeRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
    providers: [RiskAnalyzeStore],
    children: [
      {
        path: 'active',
        loadComponent: () => import('./risk-analyze/steps.component').then(c => c.StepsComponent)
      },
      {
        path: 'ongoing',
        loadComponent: () => import('./risk-analyze/ongoing.component').then(c => c.OngoingComponent)
      },
      {
        path: '',
        redirectTo: 'active',
        pathMatch: 'full'
      }
    ]
  }
];
