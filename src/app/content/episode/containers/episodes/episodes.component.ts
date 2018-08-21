import { Store } from 'store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EpisodeService } from 'content/shared/services/episode/episode.service';
import { Subscription } from 'rxjs/Subscription';
import { Episode } from 'models/episode';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit, OnDestroy {

  SerialID: any;
  episodes$: Observable<Episode[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private episodeService: EpisodeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.SerialID = this.route.snapshot.params.id;
    console.log(this.SerialID);
    this.episodes$ = this.store.select<Episode[]>('serial/`${SerialID}`/episode');
    this.subscription = this.episodeService.episodes$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
  removeEpisode(event: Episode) {
    this.episodeService.removeEpisode(event);
  }
}
