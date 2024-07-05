/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RiskAnalysisDocumentationComponent, RiskAnalyzeModule } from '@myorg/risk-analyze';

@Component({
  selector: 'pos-analyzes',
  standalone: true,
  imports: [CommonModule, RiskAnalysisDocumentationComponent, RiskAnalyzeModule],
  template: `
    <h2>Integration of a component</h2>
    <lib-risk-analyze-doc />
    <lib-risk-analyze partnerIdentifier="P12345678" />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationComponent {}
