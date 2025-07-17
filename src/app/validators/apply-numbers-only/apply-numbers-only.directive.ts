import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appApplyNumbersOnly]'
})
export class ApplyNumbersOnlyDirective {

  constructor() { }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    const charCode = event.key;
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pastedInput = event.clipboardData?.getData('text')??'';
    if(!/^\d+$/.test(pastedInput)) {
      event.preventDefault();
    }
  }

}
