import { AbstractControl } from '@angular/forms';

export const validate = (regexp: RegExp, field:string)=> {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const correct = regexp.test(control.value);
      return !correct ? {[`error${field}`]: {value: control.value}} : null;
    };
}