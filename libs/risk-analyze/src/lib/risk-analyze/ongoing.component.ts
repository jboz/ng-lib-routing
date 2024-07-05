import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RiskAnalyzeStore } from './risk-analyze.store';

@Component({
  selector: 'lib-risk-analyze-ongoing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h3>Ongoing analyses:</h3>
    <ul>
      @for (analysis of analyses(); track analysis) {
      <li>{{ analysis.partnerIdentifier }} - {{ analysis.status }}</li>
      }
    </ul>
    <p><button [routerLink]="['../active']">show ongoing analyses</button></p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OngoingComponent {
  analyses = inject(RiskAnalyzeStore).currentAnalyses;
}
