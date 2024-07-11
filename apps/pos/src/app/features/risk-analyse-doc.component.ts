/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RiskAnalysisDocumentationComponent, RiskAnalyzeModule } from '@myorg/risk-analyze';
import { delay, of, tap } from 'rxjs';

@Component({
  selector: 'pos-analyzes',
  standalone: true,
  imports: [CommonModule, RiskAnalysisDocumentationComponent, RiskAnalyzeModule],
  template: `
    <h2>Integration of a component</h2>
    <p>
      client message: <b>{{ clientMessage() }}</b>
    </p>
    <lib-risk-analyze-doc [(message)]="clientMessage" />
    <lib-risk-analyze partnerIdentifier="P12345678" />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationComponent {
  clientMessage = model<string | undefined>();

  constructor() {
    of('Ready to go!')
      .pipe(
        delay(3000),
        tap(message => this.clientMessage.set(message)),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
