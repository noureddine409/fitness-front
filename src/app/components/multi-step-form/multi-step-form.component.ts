import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Step} from "../../models/step.model";
import {COMPLETE_PROFILE_FORM_STEPS} from "../../constants/constants";
import {Address, PhoneNumber, SocialMedia, UserPatch} from "../../models/user.model";
import {UserService} from "../../services/user-service/user.service";
import {Router} from "@angular/router";

interface Form {
  [key: string]: any;
}

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent {

  form!: FormGroup;
  currentStep = 0;
  @Input() steps: Step[] = COMPLETE_PROFILE_FORM_STEPS

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {

    const formGroupObj: Form = {};
    this.steps.forEach((step, index) => {
      step.fields.forEach(field => {
        formGroupObj[field.name] = ['', Validators.required];
      });
    });
    this.form = this.formBuilder.group(formGroupObj);
  }

  goToStep(step: number) {
    this.currentStep = step;
  }

  submitForm() {
    const submited = this.form.value;
    console.log(submited)
     this.userService.updateUser(submited).subscribe(
       value => {
         this.router.navigate(['/home'])
       }
     )
  }





}
