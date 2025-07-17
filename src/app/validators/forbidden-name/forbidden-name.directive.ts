import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenNameDirective,
    multi: true
  }]
})

export class ForbiddenNameDirective  implements Validator {

  @Input() appForbiddenName: string = '';

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {

    if(!this.appForbiddenName) return null;
    
    const forbidden = control.value === this.appForbiddenName;
    return forbidden ? {forbiddenName: control.value} : null;
  }

}
