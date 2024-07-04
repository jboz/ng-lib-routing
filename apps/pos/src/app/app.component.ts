import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'pos-root',
  template: `
    <h1>Welcome to POS application</h1>
    <div id="container">
      <nav>
        <a routerLink="/initalize">Initialize</a>
        <a routerLink="/analyze">Manual analyze</a>
        <a routerLink="/results">Results</a>
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
      }

      main {
        flex: 1 1 auto;
      }
    }
  `
})
export class AppComponent {}
