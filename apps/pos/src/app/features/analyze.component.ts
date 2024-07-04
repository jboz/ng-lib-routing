import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { processState } from '../core/process.store';

@Component({
  selector: 'pos-analyze',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Start analyze process manually</h2>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class analyzeComponent {
  identifier = processState.partnerIdentifier;
}
