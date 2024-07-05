import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RiskAnalyzeStore } from './risk-analyze.store';

@Component({
  selector: 'lib-risk-analyze-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Risk analysis {{ partnerIdentifier() }}</h2>
    <router-outlet></router-outlet>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  readonly #store = inject(RiskAnalyzeStore);
  partnerIdentifier = input.required<string>();

  constructor() {
    effect(() => this.#store.addRiskAnalyze(this.partnerIdentifier()), { allowSignalWrites: true });
  }
}
