import { Pipe, PipeTransform } from '@angular/core';

export const country:{[key: string]: string} =  {
  IN: 'INDIA',
  USA: 'UNITED STATES OF AMERICA',
  UK:'UNITES KINGDOM'

}

@Pipe({
  name: 'abbrCountry'
})
export class AbbrCountryPipe implements PipeTransform {

  

  transform(value: string): string {
    if(typeof value !== 'string') return '';

    return country[value?.toUpperCase()] || '';
  }

}
