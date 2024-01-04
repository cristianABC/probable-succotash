import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-number-question',
  templateUrl: './number-question.component.html',
  styleUrls: ['./number-question.component.css']
})
export class NumberQuestionComponent {

@Input() title: string = '';
@Input() value: number = 0;
@Output() valueChange = new EventEmitter<number>();
onChange: (newValue: number) => void = () => {};
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.onChange(changes['value'].currentValue);
    }
  }
  writeValue(obj: number): void {
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

  setValue(event: any) {
    this.value = event.target.value as number;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

}
