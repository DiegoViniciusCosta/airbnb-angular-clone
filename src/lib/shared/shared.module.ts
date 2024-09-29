import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,
    ContainerComponent,
    LogoComponent
  ],
  exports: [
    NavbarComponent,
    LogoComponent
  ]
})
export class SharedModule { }
