import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { startProcess } from '../core/process.store';

@Component({
  selector: 'pos-initialize',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <h2>Initialize process</h2>
    <div>
      <label for="identifier">Partner identifier: </label>
      <input id="identifier" type="text" placeholder="P12345678" [formControl]="identifier" />
    </div>
    <button [disabled]="!identifier.valid" (click)="startProcess()">Start analyze</button>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 1em;

      button {
        align-self: end;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitializeComponent {
  router = inject(Router);

  identifier = new FormControl('P12345678', [Validators.required, Validators.pattern('P\\d{8}')]);

  startProcess() {
    if (this.identifier.valid && this.identifier.value) {
      startProcess(this.identifier.value);
      this.router.navigate(['/', this.identifier.value, 'risk-analyze']);
    }
  }
}
