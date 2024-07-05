import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProcessStore } from '../core/process.store';

@Component({
  selector: 'pos-initialize',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <h2>Initialize process</h2>
    <div>
      <label for="identifier">Partner identifier: </label>
      <input id="identifier" type="text" placeholder="P12345678" [formControl]="identifier" (keydown.enter)="startProcess()" />
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
  store = inject(ProcessStore);

  identifier = new FormControl(this.store.partnerIdentifier(), [Validators.required, Validators.pattern('P\\d{8}')]);

  startProcess() {
    if (this.identifier.valid && this.identifier.value) {
      this.store.startProcess(this.identifier.value);
    }
  }
}
