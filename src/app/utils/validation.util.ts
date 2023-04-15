import {AbstractControl, ValidatorFn} from '@angular/forms';
import {VALIDATION_MESSAGES} from "../@shared/constants";

export function getErrorMessages(errors: any) {
  const messages = [];

  if (errors) {
    if (errors.required) {
      messages.push(VALIDATION_MESSAGES.REQUIRED);
    } else if (errors.email) {
      messages.push(VALIDATION_MESSAGES.EMAIL);
    } else if (errors.passwordCommon) {
      messages.push(VALIDATION_MESSAGES.PASSWORD_COMMON);
    } else if (errors.passwordLength) {
      messages.push(VALIDATION_MESSAGES.PASSWORD_LENGTH);
    } else if (errors.passwordUppercase) {
      messages.push(VALIDATION_MESSAGES.PASSWORD_UPPER_CASE);
    } else if (errors.passwordLowercase) {
      messages.push(VALIDATION_MESSAGES.PASSWORD_LOWER_CASE);
    } else if (errors.passwordDigit) {
      messages.push(VALIDATION_MESSAGES.PASSWORD_DIGITS);
    } else if (errors.passwordSpecial) {
      messages.push(VALIDATION_MESSAGES.PASSWORD_SPECIAL);
    } else if (errors.mismatch) {
      messages.push(VALIDATION_MESSAGES.MISMATCH);
    } else if (errors.pattern) {
      messages.push(VALIDATION_MESSAGES.PATTERN_INPUT_MATCH);
    } else if (errors.minlength) {
      messages.push(`${VALIDATION_MESSAGES.MIN_INPUT} ${errors.minlength.requiredLength} characters`);
    } else if (errors.maxlength) {
      messages.push(`${VALIDATION_MESSAGES.MAX_INPUT} ${errors.maxlength.requiredLength} characters`);
    } else if (errors.min) {
      messages.push(`${VALIDATION_MESSAGES.MIN_INPUT} ${errors.min.min}`);
    } else if (errors.max) {
      messages.push(`${VALIDATION_MESSAGES.MAX_INPUT} ${errors.max.max}`);
    } else {
      messages.push(VALIDATION_MESSAGES.INVALID_INPUT);
    }
  }

  return messages;
}



export function matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.root.get('password');
  return password && control.value !== password.value ? {'mismatch': true} : null;
}


const commonPasswords = [
  'password',
  '123456',
  '123456789',
  '12345678',
  '12345',
  '1234567',
  '1234567890',
  'qwerty',
  'abc123',
  '111111',
  'admin',
  'letmein',
  'welcome',
  'monkey',
  'login',
  'football',
  'starwars',
  '123123',
  '654321',
  'passw0rd',
  'master',
  'hello',
  'freedom',
  'whatever',
  'trustno1',
];

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }

    // Password must not be a common password
    if (commonPasswords.includes(control.value.toLowerCase())) {
      return {'passwordCommon': true};
    }

    // Password must be at least 8 characters long
    if (control.value.length < 8) {
      return {'passwordLength': true};
    }

    // Password must contain at least one uppercase letter
    if (!/[A-Z]/.test(control.value)) {
      return {'passwordUppercase': true};
    }

    // Password must contain at least one lowercase letter
    if (!/[a-z]/.test(control.value)) {
      return {'passwordLowercase': true};
    }

    // Password must contain at least one digit
    if (!/\d/.test(control.value)) {
      return {'passwordDigit': true};
    }

    // Password must contain at least one special character
    if (!/[\W_]/.test(control.value)) {
      return {'passwordSpecial': true};
    }

    return null;
  };
}

