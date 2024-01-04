import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type ThreeButtonOptions = 'true' | 'false' | 'Cannot do it' | null;


@Component({
  selector: 'app-three-buttons',
  templateUrl: './three-buttons.component.html',
  styleUrls: ['./three-buttons.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useValue: ['true', 'false', 'Cannot do it'],
      multi: true
    }
  ]
})
export class ThreeButtonsComponent implements  OnChanges, ControlValueAccessor {
  
  @Input() title: string = '';
  @Input() value: ThreeButtonOptions = null;
  @Output() valueChange = new EventEmitter<ThreeButtonOptions>();
  onChange: (newValue: ThreeButtonOptions) => void = () => {};
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.onChange(changes['value'].currentValue);
    }
  }
  writeValue(obj: ThreeButtonOptions): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  setValue(value: ThreeButtonOptions) {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

}
