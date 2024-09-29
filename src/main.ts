import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './lib/app/app.config';
import { AppComponent } from './lib/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
