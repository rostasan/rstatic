import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Document editor
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// conatiners
import { SharedModule } from 'content/shared/shared.module';
import { EpisodeComponent } from 'content/episode/containers/episode/episode.component';
import { EpisodesComponent } from 'content/episode/containers/episodes/episodes.component';
import { EpisodeFormComponent } from 'content/episode/components/episode-form/episode-form.component';
import { EpisodeService } from 'content/shared/services/episode/episode.service';



export const ROUTES: Routes = [
  { path: '', component: EpisodesComponent },
  { path: 'serial/:id/episode/new', component: EpisodeComponent },
  { path: ':id', component: EpisodeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [
    EpisodeComponent,
    EpisodesComponent,
    EpisodeFormComponent],
    providers: [
      EpisodeService
    ],
    exports: [
      EpisodeFormComponent
    ]
})
export class EpisodeModule { }
