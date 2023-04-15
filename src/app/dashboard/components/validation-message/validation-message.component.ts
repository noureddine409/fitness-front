import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {getErrorMessages} from "../../../utils/validation.util";

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css']
})
export class ValidationMessageComponent {

  @Input()
  formGroup!: FormGroup;

  @Input()
  submitted!: boolean;

  @Input()
  formControlName!: string;

  getErrorMessage(errors: any) {
    return getErrorMessages(errors);
  }
}
