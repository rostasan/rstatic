import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Serial } from 'models/serial';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input()
  serial: Serial;

  @Input()
  item: any;

  currentRoute: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  getRoute(item: any) {
    // dollar-sign curly-bracket is a ES6 string literal. This allows the route to be shared between upper level components
    return [`../${this.currentRoute}`, item.id];
  }

}
