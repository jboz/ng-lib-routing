import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { currentAnalyze } from './risk-analyze.state';

@Component({
  selector: 'lib-risk-analyze-steps',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Analyse steps in progress...</p>
    <p>{{ data() }}</p>
  `,
  styles: ``
})
export class StepsComponent {
  data = computed(() => JSON.stringify(currentAnalyze()));
}
