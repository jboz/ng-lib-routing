import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-risk-analyze-doc',
  standalone: true,
  template: `
    <h3>Risk analysis documentation</h3>
    <p>Explain the risk analysis process here.</p>
    <p>How to calculate the risk score?</p>
    <p>How to display the risk score?</p>
    <p>How to display the risk score history?</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RiskAnalysisDocumentationComponent {}
