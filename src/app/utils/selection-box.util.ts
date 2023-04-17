import {FormGroup} from "@angular/forms";


export function removeFromSetAtIndex(setToUpdate: Set<string>, index: number): void {
  const updatedArray = Array.from(setToUpdate);
  updatedArray.splice(index, 1);
  setToUpdate.clear();
  for (const item of updatedArray) {
  setToUpdate.add(item);
}
}


export function updateSetFromValueChanges(setToUpdate: Set<string>, formControlName: string, formGroup: FormGroup): void {
  const formControl = formGroup.get(formControlName);
  if (formControl) {
    formControl.valueChanges.subscribe(values => {
      if (values) {
        for (const value of values) {
          if (value && !setToUpdate.has(value)) {
            setToUpdate.add(value);
          }
        }
      }
    });
  }
}
