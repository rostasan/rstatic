import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProseComponent } from './prose/prose.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapterIdComponent } from './chapter-id/chapter-id.component';

import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddStoryModule } from './add-story/add-story.module';


import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import * as firebase from '@firebase/app';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    ProseComponent,
    ChapterComponent,
    ChapterIdComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AddStoryModule,
    FormsModule,  // <-- import the FormsModule before binding with [(ngModel)]
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    // AngularFireAuthModule, imports firebase/auth, only needed for auth features
    AngularFirestoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
