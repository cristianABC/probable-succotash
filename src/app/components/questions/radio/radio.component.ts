import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Options } from '../interfaces/options.interface';

type RadioOptions = string | null;

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: RadioComponent,
      multi: true
    }
  ]
})
export class RadioComponent implements OnChanges, ControlValueAccessor {
 
  
  @Input() title:string = '';
  @Input() options: Options[] = [];
  @Input() value: RadioOptions = null;
  @Output() valueChange = new EventEmitter<RadioOptions>();
  onChange: (newValue: RadioOptions) => void = () => {};  

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.onChange(changes['value'].currentValue);
    }
  }

  writeValue(obj: RadioOptions): void {
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
  setValue(value: RadioOptions) {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

}
