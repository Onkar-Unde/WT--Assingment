import { provideRouter } from '@angular/router';
import {routes } from './app.routes'; // Ensure this import is correct

export const appConfig = {
  providers: [
    provideRouter(routes) // Use the exported 'routes' here
  ]
};
