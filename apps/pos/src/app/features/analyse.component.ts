import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pos-analyse',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<h2>Analyse process</h2>
    <button type="button" routerLink="/initalize">Back</button>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyseComponent {}
