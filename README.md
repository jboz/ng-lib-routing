# POC project to find the best way to integrate a complexe library into an Angular app

## 1. Integration with routing

The library expose some routes, _libs/risk-analyze/lib/lib.routes.ts_. This file is exported by the lib (_libs/risk-analyze/lib/index.ts_)

```typescript
export const riskAnalyzeRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./risk-analyze/steps.component').then(c => c.StepsComponent)
      },
      [...]
    ]
  }
];
```

The app includes this library's routes in its routing _apps/pos/app/src/app.routes.ts_

```typescript
export const appRoutes: Route[] = [
  [...]
  {
    path: ':partnerIdentifier/risk-analyze',
    loadChildren: () => import('@myorg/risk-analyze').then(m => m.riskAnalyzeRoutes)
  },
  [...]
];
```

So a new route is created, and the app can navigate to this new route.

```typescript
this.router.navigate(['/', this.partnerIdentifier, 'risk-analyze']);
```

### Passing data to the library

A nice way to do so is to use a route binding parameter by configure app _apps/pos/app/src/app.config.ts_

```typescript
provideRouter(appRoutes, withComponentInputBinding());
```

And the library will receive this data in its component: _libs/risk-analyze/lib/risk-analyze/main.component.ts_

```typescript
partnerIdentifier = input.required<string>();
```

Thats it!
