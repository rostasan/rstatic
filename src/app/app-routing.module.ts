
import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddStoryComponent } from './add-story/add-story.component';
import { HomeComponent } from './home/home.component';
import { ProseComponent } from './prose/prose.component';
import { ChapterComponent } from './chapter/chapter.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
    { path: '', redirectTo: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'prose', component: ProseComponent},
    { path: 'chapter', component: ChapterComponent },
    { path: 'addStory', component: AddStoryComponent },
    { path: '**', component: NotFoundComponent }

];



// @NgModule({
//     imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
//         exports: [RouterModule]
// })

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { ModuleWithProviders = RouterModule.forRoot(routes);
}
