import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serial } from 'models/serial';

@Component({
  selector: 'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  item: any;

  @Input()
  serial: Serial;

  @Output()
  remove = new EventEmitter<any>();

  toggled = false;
  currentRoute: any;


  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  toggle() {
    this.toggled = !this.toggled;

  }

  removeItem() {
    this.remove.emit(this.item);

  }

  getRoute(item: any) {
    // dollar-sign curly-bracket is a ES6 string literal. This allows the route to be shared between upper level components
    return [ 'episode'];
  }

}
