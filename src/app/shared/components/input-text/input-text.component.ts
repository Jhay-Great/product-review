import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  imports: [],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent implements ControlValueAccessor {
  label = input<string>('');
  id = input<string>('');
  description = input<string>('');
  value = '';

  onChange = (_:string) => {};
  onTouch = () => {}

  writeValue(inputValue: string): void {
    this.value = inputValue;
  };

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  };

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  };

  onInput(event: Event) {
    const element = event.target as HTMLInputElement;
    const { value } = element;
    this.onChange(value);
    this.onTouch();
  }

}
