import { FormControl } from "@angular/forms";
import { emailValidator } from "./email-validator.directive";


describe('Email Validator Directive', () => {
  it('should return null, if the control value is null', () => {
    const control = new FormControl(null);
    expect(emailValidator()(control)).toBeNull();
  });

  it('should retun error, id the control value mismacthed with regexpression', () => {
     const control = new FormControl('test!');
    expect(emailValidator()(control)).toEqual({invalidEmail: true});
  });

  it('should return null, if the control value matched with reg expression', () => {
    const control = new FormControl('test@gmail.com');
    expect(emailValidator()(control)).toBeNull()
  })
})