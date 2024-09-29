import { Routes } from '@angular/router';
import { HomeModule } from '../home/home.module';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => HomeModule
    }
];
