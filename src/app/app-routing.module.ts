import { NotFoundModule } from './not-found/not-found.module';
import { ScreenplaysModule } from 'content/screenplays/screenplays.module';
import { ProseModule } from 'content/prose/prose.module';
import { PlaysModule } from 'content/plays/plays.module';
import { SerialModule } from 'content/serial/serial.module';
import { BlogModule } from 'content/blog/blog.module';
import { AuthGuard } from 'auth/shared/guards/auth.guard';

import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddStoryComponent } from 'add-story/add-story.component';
import { HomeComponent } from 'home/home.component';
import { ProseComponent } from 'prose/prose.component';
import { ChapterComponent } from 'chapter/chapter.component';
import { NotFoundComponent } from 'not-found/not-found.component';



const routes: Routes = [
    // { path: '', redirectTo: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'prose', component: ProseComponent},
    { path: 'chapter', component: ChapterComponent },
    { path: 'addStory', component: AddStoryComponent },
    { path: 'blog', canActivate: [AuthGuard], loadChildren: () => BlogModule },
    { path: 'serial', canActivate: [AuthGuard], loadChildren: () => SerialModule },
    { path: 'plays', canActivate: [AuthGuard], loadChildren: () => PlaysModule },
    { path: 'prose', canActivate: [AuthGuard], loadChildren: () => ProseModule },
    { path: 'screenplays', canActivate: [AuthGuard], loadChildren: () => ScreenplaysModule }
    // ,
    // { path: '**', canActivate: [AuthGuard], loadChildren: () => NotFoundModule }

];



// @NgModule({
//     imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
//         exports: [RouterModule]
// })

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})

export class AppRoutingModule { ModuleWithProviders = RouterModule.forRoot(routes);
}
