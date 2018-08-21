import { Router } from '@angular/router';
import { Serial } from 'models/serial';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {

  @Input()
  serial: Serial;

  @Input()
  item: any;

  @Output()
  remove = new EventEmitter<any>();

  toggled = false;
  currentRoute: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }
  removeItem() {
    this.remove.emit(this.item.id);

  }

  toggle() {
    this.toggled = !this.toggled;

  }
  getRoute(item: any) {
    // dollar-sign curly-bracket is a ES6 string literal. This allows the route to be shared between upper level components
    return [`../${this.currentRoute}`, item.id];
  }
}
