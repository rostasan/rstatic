import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.css']
})
export class AuthRememberComponent  {
  

  constructor() { }
    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    onChecked(value: boolean) {
      this.checked.emit(value);
    }


}
