import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function phoneValidator(): ValidatorFn {
    const phoneRegex = /^[0-9]{10}$/;
    return (control: AbstractControl):ValidationErrors | null => {

        if(!control?.value) return null;

        return phoneRegex.test(control?.value) ? null : {invalidPhoneNo: true};
    }
}