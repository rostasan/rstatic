import { ActivatedRoute } from '@angular/router';
import { Story } from './../models/story';
import { Component, OnInit, Injectable } from '@angular/core';
import { FirebaseService } from '../shared/firebase/firebase.service';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})

@Injectable() // <<<=== required if the constructor has parameters

export class AddStoryComponent implements OnInit {
  story: Story = {
    title: '',
    description: '',
    chapter: '',
    id: ''
  };

  editState: boolean = false;
  storyToEdit: Story;
  stories: Story[];
  storyId: string;
  currentStory: string;


  constructor(
    private _firebaseService: FirebaseService,
    private route: ActivatedRoute,
    db: AngularFireDatabase
  ) { }

  ngOnInit() {
    //  this.route.params.forEach((urlParameters) => {
    //  this.storyId = urlParameters['id'];
    this._firebaseService.getStories().subscribe(stories => {
      this.stories = stories;
    });
    this._firebaseService.updateStory(this.story);

  }

  deleteStory(event, story: Story) {
    this.clearState();
    this._firebaseService.deleteStory(story);
  }
  editStory(event, story: Story) {
    this.editState = true;
    this.storyToEdit = story;
  }
  updateStory(story: Story) {
    this._firebaseService.updateStory(story);
    this.clearState();
  }
  clearState() {
    this.editState = false;
    this.storyToEdit = null;
  }



  onSubmit() {
    if (this.story.title !== '' && this.story.description !== '') {
      this._firebaseService.addStory(this.story);
      this.story.title = '';
      this.story.description = '';
      this.story.chapter = '';

    }
  }
}
