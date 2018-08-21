import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Output } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

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


  @Output() EpisodeID = this.route.params
    .switchMap(param => this.episodeService.getEpisodeId(param.id));

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
    this.episodes$ = this.store.select<Episode[]>('episode');
    this.subscription = this.episodeService.episodes$.subscribe();
    this.episode$ = this.route.params
      .switchMap(param => this.episodeService.getEpisodeId(param.id));
      console.log('hello');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addEpisode(event: Episode, SerialID) {
    const ID = event.title;
    const customId = ID.replace(' ', '_');
    await this.episodeService.addEpisode(event, customId, SerialID);
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
