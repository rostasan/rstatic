
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// thirdparty modules
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ListItemComponent } from 'content/shared/components/list-item/list-item.component';
import { ViewComponent } from 'content/shared/components/view/view.component';
import { ListGroupComponent } from 'content/shared/components/list-group/list-group.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    ListItemComponent,
    ViewComponent,
    ListGroupComponent
  ],
  exports: [
    ListItemComponent,
    ViewComponent,
    ListGroupComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
