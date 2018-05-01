import { FirebaseService } from './firebase/firebase.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { LoginComponent } from './login/login.component';
import { AuthFormComponent } from './login/auth-form/auth-form.component';
import { AuthRememberComponent } from './login/auth-form/auth-remember.component';
import { AuthMessageComponent } from './login/auth-form/auth-message/auth-message.component';




/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot()
    ],
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    LoginComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    ],
  exports: [ToolbarComponent, NavbarComponent,
    CommonModule, FormsModule, RouterModule, LoginComponent, AuthFormComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [FirebaseService]
    };
  }
}
