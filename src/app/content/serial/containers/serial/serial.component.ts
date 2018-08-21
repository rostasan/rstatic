
import { Episode } from 'models/episode';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Output, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

// interfaces
import { Serial } from 'models/serial';


// services
import { SerialService } from 'content/shared/services/serial/serial.service';
import { EpisodeService } from 'content/shared/services/episode/episode.service';

import { Store } from 'store';

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.scss']
})
export class SerialComponent implements OnInit, OnDestroy {


  @Input()
  item: any;

  // @Output() SerialID = this.route.snapshot.params.id;

  toggledContent = true;
  exists = false;

  serials$: Observable<Serial[]>;
  episodes$: Observable<Episode[]>;
  serial$: Observable<Serial>;
  subscription: Subscription;
  currentRoute: any;

  SerialID: any;

  constructor(
    private store: Store,
    private serialService: SerialService,
    private episodeService: EpisodeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.currentRoute = this.router.url;

    if (this.SerialID === 'new') {
        console.log('new route');
    } else {
    this.subscription = this.serialService.serials$.subscribe();
    this.serials$ = this.store.select<Serial[]>('serial');
    this.serial$ = this.route.params
      .switchMap(paramMap => this.serialService.getSerial(paramMap.id));

    this.SerialID = this.route.snapshot.params.id;
    // console.log(this.SerialID, `serial/${this.SerialID}/episode`);
    this.episodes$ = this.store.select<Episode[]>('episode');
    this.subscription = this.episodeService.getEpisode(this.SerialID).subscribe();
      console.log('Normal route', this.currentRoute);
    }


    // console.log(this.SerialID);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addSerial(event: Serial) {
    await this.serialService.addSerial(event);
    this.backToSerial();
  }

  async updateSerial(event: Serial) {
    const id = this.route.snapshot.params.id;
    await this.serialService.updateSerial(id, event);
    this.backToSerial();
  }

  async removeSerial(event: Serial) {
    const id = this.route.snapshot.params.id;
    await this.serialService.removeSerial(id);
    this.backToSerial();
  }

  backToSerial() {
    this.router.navigate(['serial']);
  }
  toggleContent() {
    this.toggledContent = !this.toggledContent;

  }
  getRouteEpisode() {
    // dollar-sign curly-bracket is a ES6 string literal. This allows the route to be shared between upper level components
    return [`${this.currentRoute}/episode/new`];
  }

}
