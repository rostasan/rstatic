
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

// interfaces
import { Serial } from 'models/serial';

// services
import { SerialService } from 'content/shared/services/serial/serial.service';

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.scss']
})
export class SerialComponent implements OnInit, OnDestroy {

  serial$: Observable<Serial>;
  subscription: Subscription;

  constructor(
    private serialService: SerialService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.subscription = this.serialService.serials$.subscribe();
    this.serial$ = this.route.params
      .switchMap(param => this.serialService.getSerial(param.id));
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
}
