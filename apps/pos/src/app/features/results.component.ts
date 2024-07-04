import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResultsComponent } from '@myorg/results-lib';

@Component({
  selector: 'pos-results',
  standalone: true,
  imports: [CommonModule, ResultsComponent],
  template: `<lib-results [partnerIdentifier]="'P32165498'" />`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyzeResultsComponent {}
