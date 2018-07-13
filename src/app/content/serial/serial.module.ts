import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Document editor
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// conatiners
import { SerialComponent } from './containers/serial/serial.component';
import { SharedModule } from 'content/shared/shared.module';
import { SerialsComponent } from './containers/serials/serials.component';
import { SerialFormComponent } from './components/serial-form/serial-form.component';
import { SerialService } from 'content/shared/services/serial/serial.service';

export const ROUTES: Routes = [
  { path: '', component: SerialsComponent },
  { path: 'new', component: SerialComponent },
  { path: 'serial/:id', component: SerialComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [
    SerialComponent,
    SerialFormComponent,
    SerialsComponent],
    providers: [SerialService],
    exports: [SerialFormComponent]
})
export class SerialModule { }
