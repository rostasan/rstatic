
import { ScreenplaysModule } from './screenplays/screenplays.module';
import { ProseModule } from './prose/prose.module';
import { PlaysModule } from './plays/plays.module';
import { BlogModule } from './blog/blog.module';
import { SerialModule } from 'content/serial/serial.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Shared Modules
import { SharedModule } from './shared/shared.module';

// Guards
import { AuthGuard } from 'auth/shared/guards/auth.guard';


export const ROUTES: Routes = [

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'blog', canActivate: [AuthGuard], loadChildren: () => BlogModule },
  { path: 'serial', canActivate: [AuthGuard], loadChildren: () => SerialModule },
  { path: 'plays', canActivate: [AuthGuard], loadChildren: () => PlaysModule },
  { path: 'prose', canActivate: [AuthGuard], loadChildren: () => ProseModule },
  { path: 'screenplays', canActivate: [AuthGuard], loadChildren: () => ScreenplaysModule }
  // loadChildren: () Callback method to the ROUTES in the module
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    SharedModule.forRoot(),
    BlogModule,
    PlaysModule,
    ProseModule,
    SerialModule,
    ScreenplaysModule
  ]
})
export class ContentModule { }
