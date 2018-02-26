import { Chapters } from './../../models/chapter';
import { Story } from './../../models/story';
import { Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/operator/filter';
import 'rxjs/add/operator/do';


import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable()


export class FirebaseService {
    stories: Observable<Story[]>;
    chapterId: string;
    storyId: string;
    storiesCollection: AngularFirestoreCollection<Story>;
    storiesDocument: AngularFirestoreDocument<Chapters>;
    storyDoc: AngularFirestoreDocument<Story>;
    editState: boolean = false;
    storyToEdit: Story;
    storyCollection: AngularFirestoreCollection<Story>;
    story: Observable<Story[]>;
    chapter: string;

    constructor(
        private db: AngularFireDatabase,
        private route: ActivatedRoute,
        private afs: AngularFirestore,
        )  {
                    this.storiesCollection = this.afs.collection('prose', ref => ref.orderBy('title', 'asc'));

                    this.stories = this.storiesCollection.snapshotChanges().map(changes => {
                    return changes.map(a => {
                        const data = a.payload.doc.data() as Story;
                        data.id = a.payload.doc.id;
                        // https://github.com/angular/angularfire2/blob/master/docs/rtdb/querying-lists.md
                        return data;
                    });
                });
        this.storyCollection = this.afs.collection('stories');
        this.story = this.storyCollection.valueChanges();


            }

    // https://www.youtube.com/watch?v=gUmItHaVL2w Traversy CRUD
    // https://www.youtube.com/watch?v=cwqeyOFcaoA step 2
    // https://www.youtube.com/watch?v=onVp-8BYUSM&t=959s step 3



        getStories() {
            return this.stories;
        }
        // getStory(story: Story) {
        //     return this.afs.doc(`prose/${story.id}`);
        // }
        getStory(story: Story) {
        return this.story;
    }

        addStory(story: Story) {
            this.storiesCollection.add(story);
        }

        deleteStory(story: Story) {
            this.storyDoc = this.afs.doc(`prose/${story.id}`);
            this.storyDoc.delete();
        }

        updateStory(story: Story) {
            this.storyDoc = this.afs.doc(`prose/${story.id}`);
            this.storyDoc.update(story);
        }
}






