import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
  selector: 'lib-risk-analyze-doc',
  standalone: true,
  template: `
    <h3>Risk analysis documentation</h3>
    <div>
      <div>Explain the risk analysis process here.</div>
      <button [disabled]="!message()" (click)="message.set('explain process')">GO</button>
    </div>
    <div>
      <div>How to calculate the risk score?</div>
      <button [disabled]="!message()" (click)="message.set('calculate score')">GO</button>
    </div>
    <div>
      <div>How to display the risk score?</div>
      <button [disabled]="!message()" (click)="message.set('display score')">GO</button>
    </div>
    <div>
      <div>How to display the risk score history?</div>
      <button [disabled]="!message()" (click)="message.set('display history')">GO</button>
    </div>
  `,
  styles: `
    div {
      width: 100%;
      display: flex;
      gap: 1em;
      margin: 5px 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RiskAnalysisDocumentationComponent {
  message = model<string | undefined>();
}
