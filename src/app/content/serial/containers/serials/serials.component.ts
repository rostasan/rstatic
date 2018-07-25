import { Store } from 'store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SerialService } from 'content/shared/services/serial/serial.service';
import { Subscription } from 'rxjs/Subscription';
import { Serial } from 'models/serial';


@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.scss']
})
export class SerialsComponent implements OnInit, OnDestroy {

  serials$: Observable<Serial[]>;
  subscription: Subscription;



  constructor(
    private store: Store,
    private serialService: SerialService
  ) { }

  ngOnInit() {
    this.serials$ = this.store.select<Serial[]>('serial');
    this.subscription = this.serialService.serials$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
  removeSerial(event: Serial) {
    this.serialService.removeSerial(event);
  }
}
