import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RiskAnalyzeStore } from './risk-analyze.store';

@Component({
  selector: 'lib-risk-analyze-steps',
  standalone: true,
  imports: [CommonModule, JsonPipe, RouterLink],
  template: `
    <h3>Analyse steps in progress...</h3>
    <p>{{ active() | json }}</p>
    <p><button [routerLink]="['../ongoing']">show ongoing analyses</button></p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepsComponent {
  readonly #store = inject(RiskAnalyzeStore);
  active = this.#store.activeAnalysis;
}
