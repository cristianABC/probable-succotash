import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type DropwdownOptions = EventTarget | null;

@Component({
  selector: 'app-dropdown-question',
  templateUrl: './dropdown-question.component.html',
  styleUrls: ['./dropdown-question.component.css'],
  providers: [
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: DropdownQuestionComponent,
      multi: true
    }
  ]
})
export class DropdownQuestionComponent implements OnChanges, ControlValueAccessor {
  
  @Input() title:string = '';
  @Input() value: DropwdownOptions = null;
  @Output() valueChange = new EventEmitter<DropwdownOptions>();
  onChange: (newValue: DropwdownOptions) => void = () => {};
  
  writeValue(obj: DropwdownOptions): void {
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
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.onChange(changes['value'].currentValue);
    }
  }
  setValue(value: any ) {
    this.value = value.target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  logTest(value:any){
    console.log(value.target.value);
  }
}
