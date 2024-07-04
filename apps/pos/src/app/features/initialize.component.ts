import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pos-initialize',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<h2>Initialize process</h2>
    <button type="button" routerLink="/analyse">Start analyse</button>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitializeComponent {}
