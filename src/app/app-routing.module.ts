import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AddStoryComponent } from 'add-story/add-story.component';
import { HomeComponent } from 'home/home.component';
import { ProseComponent } from 'prose/prose.component';
import { ChapterComponent } from 'chapter/chapter.component';

// AuthGuard
import { AuthGuard } from 'auth/shared/guards/auth.guard';

// lazy load modules
import { EpisodeModule } from 'content/episode/episode.module';
import { ScreenplaysModule } from 'content/screenplays/screenplays.module';
import { ProseModule } from 'content/prose/prose.module';
import { PlaysModule } from 'content/plays/plays.module';
import { SerialModule } from 'content/serial/serial.module';
import { BlogModule } from 'content/blog/blog.module';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prose', component: ProseComponent},
    { path: 'chapter', component: ChapterComponent },
    { path: 'addStory', component: AddStoryComponent },
    { path: 'blog', canActivate: [AuthGuard], loadChildren: () => BlogModule },
    { path: 'serial', canActivate: [AuthGuard], loadChildren: () => SerialModule },
    { path: 'episode', canActivate: [AuthGuard], loadChildren: () => EpisodeModule },
    { path: 'plays', canActivate: [AuthGuard], loadChildren: () => PlaysModule },
    { path: 'prose', canActivate: [AuthGuard], loadChildren: () => ProseModule },
    { path: 'screenplays', canActivate: [AuthGuard], loadChildren: () => ScreenplaysModule }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})

export class AppRoutingModule { ModuleWithProviders = RouterModule.forRoot(routes);
}
