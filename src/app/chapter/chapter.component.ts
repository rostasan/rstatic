import { Subscription } from 'rxjs/Subscription';
import { AngularFireObject } from 'angularfire2/database';

import { Story } from './../models/story';
import { Component, OnInit, Injectable, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

import { FirebaseService } from '../shared/firebase/firebase.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({

  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})


export class ChapterComponent implements OnInit {

    @Input() loader: boolean = true;

  stories: Story[];
  story: Story = {
    title: '',
    description: '',
    chapter: '',
    id: ''
  };


  constructor(
      private _firebaseService: FirebaseService
  ) { }

  ngOnInit() {

    console.log('ngOninit fired');
    console.error();
    this._firebaseService.getStory(this.story).subscribe(story => {
      this.stories = story;
      console.log('getStory Data was called');
      console.error();

    });

    this._firebaseService.getStories().delay(500).subscribe(stories => {
      this.stories = stories;
      console.log('getStories was called');
      this.loader = false;
    });




    }

  }




