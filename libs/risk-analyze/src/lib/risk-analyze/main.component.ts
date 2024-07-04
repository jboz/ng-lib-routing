import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { patchState } from '@ngrx/signals';
import { addRiskAnalyze, riskAnalyzeState } from './risk-analyze.state';

@Component({
  selector: 'lib-risk-analyze-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Risk analyzing...</h2>
    <main>
      <div>
        <label>Identifier:</label><span>{{ partnerIdentifier() }}</span>
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styles: `
    main {
      display: flex;
      gap: 1em;
    }

    label {
      font-weight: bold;
    }
  `
})
export class MainComponent {
  partnerIdentifier = input.required<string>();

  constructor() {
    effect(() => patchState(riskAnalyzeState, addRiskAnalyze(this.partnerIdentifier())));
  }
}
