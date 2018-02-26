import { ChapterComponent } from './chapter/chapter.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProseComponent } from './prose/prose.component';
import { ChapterIdComponent } from './chapter-id/chapter-id.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'prose', component: ProseComponent },
    { path: 'chapter', component: ChapterComponent },
    {
        path: 'chapter-id',
        component: ChapterIdComponent,
        children: [
            { path: 'partials/chapter_I.html', component: ChapterIdComponent}
        ]
    },
    { path: 'addStory', component: AddStoryComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
        exports: [RouterModule]
})

export class AppRoutingModule { }

