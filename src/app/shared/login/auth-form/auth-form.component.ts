import { AuthMessageComponent } from './auth-message/auth-message.component';
import { User } from './../../../models/auth-form';
import { AuthRememberComponent } from './auth-remember.component';
import { QueryList, AfterContentInit, EventEmitter, ElementRef, Renderer } from '@angular/core';
import { Component, Output, ViewChild, AfterViewInit, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})

export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;
  isCollapsed: boolean = true;

  @ViewChild('email') email: ElementRef;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }
  constructor( private renderer: Renderer) { }


  ngAfterViewInit() {
      this.renderer.setElementAttribute(this.email.nativeElement, 'placeholder', 'enter email address');
      this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email');
      // this.email.nativeElement.focus();
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
      // this.remember.checked.subscribe((checked: boolean) => this.showMessage = checked);
    }
  }

}
