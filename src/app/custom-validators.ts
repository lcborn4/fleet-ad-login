import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static forbiddenDateValidator(date: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value == null) {
                return null;
            }

            const controlDate = new Date(control.value.year, control.value.month - 1, control.value.day)

            const validationDate = new Date(date);

            return controlDate > validationDate ? { 'validationDate': { value: validationDate } } : null;
        };
    };
}