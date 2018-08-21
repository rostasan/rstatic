import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Episode } from 'models/episode';

@Component({
  selector: 'app-episode-form',
  // changedetection due to this being a presentational component telling angular it doesn't need to keep track of it
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './episode-form.component.html',
  styleUrls: ['./episode-form.component.scss']
})
export class EpisodeFormComponent implements OnChanges {

  @Input()
  episode: Episode;

  @Output()
  create = new EventEmitter<Episode>();

  @Output()
  update = new EventEmitter<Episode>();

  @Output()
  remove = new EventEmitter<Episode>();

  toggled = false;
  exists = false;


  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    body: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.episode && this.episode.title) {
      this.exists = true;
      const value = this.episode;
      this.form.patchValue(value);
    }
  }

  get required() {
    return (
      this.form.get('title').hasError('required') &&
      this.form.get('title').touched
    );
  }
  createEpisode() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateEpisode() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }


  removeEpisode() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;

  }



}
