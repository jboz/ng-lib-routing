import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'lib-risk-analyze',
  template: `
    <h2>Test</h2>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RiskAnalyzeComponent {
  partnerIdentifier = input.required<string>();
}
