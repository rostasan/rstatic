import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-nav',
  changeDetection: ChangeDetectionStrategy.OnPush, // stateless nonsmart components
  templateUrl: './edit-nav.component.html',
  styleUrls: ['./edit-nav.component.scss']
})
export class EditNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
