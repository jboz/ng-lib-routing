import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RiskAnalyzeResultsComponent } from '@myorg/risk-analyze';

@Component({
  selector: 'pos-analyzes',
  standalone: true,
  imports: [CommonModule, RiskAnalyzeResultsComponent],
  template: `
    <h2>Analyzes results:</h2>
    <lib-risk-analyze-results />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyzesComponent {}
