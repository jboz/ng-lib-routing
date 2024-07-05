import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProcessStore } from './core/process.store';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'pos-root',
  template: `
    <h1>Welcome to POS application</h1>
    <div id="container">
      <nav>
        <a routerLink="/initalize" routerLinkActive="active">Initialize</a>
        <a [routerLink]="partnerIdentifier() + '/risk-analyze'" routerLinkActive="active">Risk analyze</a>
        <a routerLink="/risk-analyze/documenation" routerLinkActive="active">Documentation</a>
      </nav>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: `
    #container {
      height: 100%;
      display: flex;
      gap: 1em;

      nav {
        min-width: 10em;
        display: flex;
        flex-direction: column;
        gap: 1em;

        a.active {
          font-weight: bold;
        }
      }

      main {
        flex: 1 1 auto;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  partnerIdentifier = inject(ProcessStore).partnerIdentifier;
}
