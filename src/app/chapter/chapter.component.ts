import { Subscription } from 'rxjs/Subscription';
import { AngularFireObject } from 'angularfire2/database';

import { Story } from './../models/story';
import { Component, OnInit, Injectable, Input, Output, ViewEncapsulation, EventEmitter, DoCheck, AfterViewInit } from '@angular/core';

import { FirebaseService } from '../shared/firebase/firebase.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})


export class ChapterComponent implements OnInit {

    // Loading wheel
    @Input() loader: boolean = true;

  stories: Story[];
  story: Story = {
    title: '',
    description: '',
    chapter: '',
    id: ''
  };
  getstory: any;

  constructor(
      private _firebaseService: FirebaseService,
      private route: ActivatedRoute
  ) {
    this.getstory = this._firebaseService.getStories();

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
    console.log('ngOninit fired');
    console.error();
    // this._firebaseService.getStory(this.story).subscribe(story => {
    //   this.stories = story;
    //   console.log('getStory Data was called');
    //   console.error();

    // });

    this.getstory.delay(500).subscribe(stories => {
      this.stories = stories;
      console.log('getStories was called');
      this.loader = false;
    });

    });


    }

  }




