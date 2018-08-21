import { ScreenplaysModule } from 'content/screenplays/screenplays.module';
import { ProseModule } from 'content/prose/prose.module';
import { PlaysModule } from 'content/plays/plays.module';
import { SerialModule } from 'content/serial/serial.module';
import { BlogModule } from 'content/blog/blog.module';
import { AuthGuard } from 'auth/shared/guards/auth.guard';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddStoryComponent } from 'add-story/add-story.component';
import { HomeComponent } from 'home/home.component';
import { ProseComponent } from 'prose/prose.component';
import { ChapterComponent } from 'chapter/chapter.component';




const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prose', component: ProseComponent },
    { path: 'chapter', component: ChapterComponent },
    { path: 'addStory', component: AddStoryComponent },
    { path: 'blog', canActivate: [AuthGuard], loadChildren: 'app/blog/blog.module#BlogModule' },
    { path: 'serial', canActivate: [AuthGuard], loadChildren: 'app/serial/serial.module#SerialModule' },
    { path: 'episode', canActivate: [AuthGuard], loadChildren: 'app/episode/episode.module#EpisodeModule' },
    { path: 'plays', canActivate: [AuthGuard], loadChildren: 'app/plays/plays.module#PlaysModule' },
    { path: 'prose', canActivate: [AuthGuard], loadChildren: 'app/prose/prose.module#ProseModule' },
    { path: 'screenplays', canActivate: [AuthGuard], loadChildren: 'app/screenplays/screenplays.module#ScreenplaysModule' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})

export class AppRoutingModule {
        ModuleWithProviders = RouterModule.forRoot(routes);
}
