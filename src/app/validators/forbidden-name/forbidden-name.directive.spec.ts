import { AbstractControl, FormControl } from '@angular/forms';
import { ForbiddenNameDirective } from './forbidden-name.directive';

describe('ForbiddenNameDirective', () => {
  let forbiddenDirective: ForbiddenNameDirective;
  beforeEach(() => {
    forbiddenDirective = new ForbiddenNameDirective();
  })
  
  it('should return null, if no forbidden name value', () => {
    forbiddenDirective.appForbiddenName = '';
    const control = new FormControl('admin');
    const directiveOutput = forbiddenDirective.validate(control);
    expect(directiveOutput).toBeNull()
  });

  it('should return null, input value set is not forbidden name', () => {
    forbiddenDirective.appForbiddenName = 'admin';
    const control = new FormControl('test');
    const directiveOutput = forbiddenDirective.validate(control);
    expect(directiveOutput).toBeNull();
  });

  it('should return error, input value set is forbidden name', () => {
  forbiddenDirective.appForbiddenName = 'admin';
    const control = new FormControl('admin');
    const directiveOutput = forbiddenDirective.validate(control);
    expect(directiveOutput).toEqual({"forbiddenName": control.value})
  });
  
});
