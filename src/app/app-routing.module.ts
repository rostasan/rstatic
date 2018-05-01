
import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ChapterIdComponent } from './chapter-id/chapter-id.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { HomeComponent } from './home/home.component';
import { ProseComponent } from './prose/prose.component';
import { ChapterComponent } from './chapter/chapter.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { LoginModule } from './auth/login/login.module';
// import { RegisterModule } from './auth/register/register.module';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'prose', component: ProseComponent},
    { path: 'chapter', component: ChapterComponent },


    {
        path: 'chapter-id',
        component: ChapterIdComponent,
        children: [
            { path: 'partials/chapter_I.html', component: ChapterIdComponent}
        ]
    },
    { path: 'addStory', component: AddStoryComponent },
    { path: '**', component: NotFoundComponent }

];



// @NgModule({
//     imports: [RouterModule.forRoot(routes, { enableTracing: true })],
//         exports: [RouterModule]
// })

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, enableTracing: true });
