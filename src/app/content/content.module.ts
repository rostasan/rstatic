import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ScreenplaysModule } from './screenplays/screenplays.module';
import { ProseModule } from './prose/prose.module';
import { PlaysModule } from './plays/plays.module';
import { BlogModule } from './blog/blog.module';
import { SerialModule } from 'content/serial/serial.module';
import { EpisodeModule } from 'content/episode/episode.module';

// Shared Modules
import { SharedModule } from './shared/shared.module';






@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    BlogModule,
    PlaysModule,
    ProseModule,
    SerialModule,
    EpisodeModule,
    ScreenplaysModule
  ]
})
export class ContentModule { }
