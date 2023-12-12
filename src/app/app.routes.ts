import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: 'event',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: '/remotes/event/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.TestcompComponent),
  },
  {
    path: 'app',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: '/remotes/app/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
  },
  { path: '**', redirectTo: 'event' },
];
