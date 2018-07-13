import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Serial } from 'models/serial';



@Component({
    selector: 'app-serial-form',
    // changedetection due to this being a presentational component telling angular it doesn't need to keep track of it
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './serial-form.component.html',
  styleUrls: ['./serial-form.component.scss']
})
export class SerialFormComponent implements OnChanges {

  @Input()
  serial: Serial;

  @Output()
  create = new EventEmitter<Serial>();

  @Output()
  update = new EventEmitter<Serial>();

  @Output()
  remove = new EventEmitter<Serial>();

  toggled = false;
  exists = false;


  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    body: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.serial && this.serial.title) {
      this.exists = true;
      const value = this.serial;
      this.form.patchValue(value);
    }
  }

  get required() {
    return (
      this.form.get('title').hasError('required') &&
      this.form.get('title').touched
    );
  }
  createSerial() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateSerial() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }


  removeSerial() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;

  }
}
