import { ContentModule } from './content/content.module';
import { Store } from './store';
import { SharedLoginModule } from './auth/shared/shared.module';
import { RegisterModule } from './auth/register/register.module';
import { LoginModule } from './auth/login/login.module';
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
import { AddStoryModule } from './add-story/add-story.module';


// ************* ANgularFire ********************** /
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import * as firebase from '@firebase/app';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
// ************* ANgularFire Auth ********************** /
import { environment } from '../environments/environment.prod';


import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SerialModule } from 'content/serial/serial.module';
import { EditNavComponent } from 'content/edit-nav/edit-nav.component';





@NgModule({
  declarations: [
    AppComponent,
    ProseComponent,
    ChapterComponent,
    ChapterIdComponent,
    HomeComponent,
    NotFoundComponent,
    AppHeaderComponent,
    EditNavComponent
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
    SharedModule,
    LoginModule,
    RegisterModule,
    SerialModule,
    ContentModule,
    SharedLoginModule.forRoot()
  ],
  providers: [AngularFireAuth, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
