import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-results',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Results:</h2>
    <div>
      {{ partnerIdentifier() }}
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class ResultsComponent {
  partnerIdentifier = input.required();
}
