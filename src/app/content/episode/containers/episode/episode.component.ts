import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Output, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck';
// interfaces
import { Episode } from 'models/episode';


// services
import { EpisodeService } from 'content/shared/services/episode/episode.service';


import { Store } from 'store';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit, OnDestroy {



  SerialID: any;

  toggledContent = true;
  exists = false;

  episodes$: Observable<Episode[]>;
  episode$: Observable<Episode>;
  subscription: Subscription;


  constructor(
    private store: Store,
    private episodeService: EpisodeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.subscription = this.episodeService.episodes$.subscribe();
    this.episodes$ = this.store.select<Episode[]>('episode');
    this.episode$ = this.route.params
      .switchMap(paramMap => this.episodeService.getEpisodeId(paramMap.id));

    this.SerialID = this.route.snapshot.params.id;
    // console.log(this.SerialID, `serial/${this.SerialID}/episode`);
    this.episodes$ = this.store.select<Episode[]>('episode');
    this.subscription = this.episodeService.getEpisode(this.SerialID).subscribe();
    console.log('episode component', this.SerialID);


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
   }

  async addEpisode(event: Episode) {
    const ID = event.title;
    const customId = ID.replace(' ', '_');
    const SerialID = this.route.snapshot.params.id;
    await this.episodeService.addEpisode(event, customId, SerialID);
    console.log('add episode', SerialID);
    this.backToEpisode();
  }

  async updateEpisode(event: Episode) {
    const id = this.route.snapshot.params.id;
    await this.episodeService.updateEpisode(id, event);
    this.backToEpisode();
  }

  async removeEpisode(event: Episode) {
    const id = this.route.snapshot.params.id;
    await this.episodeService.removeEpisode(id);
    this.backToEpisode();
  }

  backToEpisode() {
    this.router.navigate(['episode']);
  }
  toggleContent() {
    this.toggledContent = !this.toggledContent;

  }
}
