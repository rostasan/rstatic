import { Story } from './../models/story';

import { FirebaseService } from './../shared/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'app-story',
  templateUrl: 'prose.component.html',
  styleUrls: ['prose.component.css'],


})



export class ProseComponent implements OnInit {




  stories: Story[];


  constructor(
    private _firebaseService: FirebaseService,

  ) {


  }
  ngOnInit() {
      this._firebaseService.getStories().subscribe(stories => {
      this.stories = stories;
    });
  }
}
