import { Router, ActivatedRoute } from '@angular/router';

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {

  @Input()
  item: any;

  @Output()
  remove = new EventEmitter<any>();

  toggled = false;
  currentRoute: any;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
    console.log('current route list-group', this.currentRoute);
  }
  removeItem() {
    this.remove.emit(this.item.id);

  }

  toggle() {
    this.toggled = !this.toggled;

  }
  getRoute(item: any) {
    // dollar-sign curly-bracket is a ES6 string literal. This allows the route to be shared between upper level components
    return [`${this.currentRoute}`, item.id];
  }
}
