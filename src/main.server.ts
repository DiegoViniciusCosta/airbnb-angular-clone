import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './lib/app/app.component';
import { config } from './lib/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
