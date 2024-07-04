import { Component, computed } from '@angular/core';
import { Risk, riskAnalyzeState } from './risk-analyze/risk-analyze.state';

@Component({
  selector: 'lib-risk-analyze-results',
  standalone: true,
  template: `
    <ul>
      @for (analyze of analyzes(); track analyze) {
      <li>{{ analyze.partnerIdentifier }} - {{ analyze.status }}</li>
      }
    </ul>
  `
})
export class RiskAnalyzeResultsComponent {
  analyzes = computed<Risk[]>(() => Object.values(riskAnalyzeState.analyzes).filter(a => !!a.partnerIdentifier));
}
