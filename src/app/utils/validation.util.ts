
export function getErrorMessages(errors: any) {
  const messages = [];
  if (errors) {
    if (errors.required) {
      messages.push('Please fill out this field.');
    }
    if (errors.email) {
      messages.push('Email must be a well-formed email address.');
    }

    if(errors.mismatch) {
      messages.push('Confirm Password does not match');
    }

  }
  return messages;
}
