import { Component, ChangeDetectionStrategy } from '@angular/core';


/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-sd-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {
  constructor() { }

}
