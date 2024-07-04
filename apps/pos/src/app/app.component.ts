import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'pos-root',
  template: `<h1>Welcome pos</h1>
    <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {}
