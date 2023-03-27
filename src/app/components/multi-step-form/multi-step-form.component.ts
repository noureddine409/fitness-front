import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Step} from "../../models/step.model";
import {COMPLETE_PROFILE_FORM_STEPS} from "../../constants/constants";
import {Address, PhoneNumber, SocialMedia, UserPatch} from "../../models/user.model";
import {UserService} from "../../services/user-service/user.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";

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

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private tokenStorageService: TokenStorageService) {

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
    const submitted = this.form.value;
    const userPatch: UserPatch = {
      firstName: submitted.firstName,
      lastName: submitted.lastName,
      birthDay: null,
      address: {
        country: submitted.country,
        city: submitted.city,
        postalCode: submitted.postalCode
      },
      phoneNumber: {
        region: "MA",
        phoneNumber: submitted.phone
      },
      socialMedia: {
        facebook: submitted.facebook,
        twitter: submitted.twitter,
        instagram: submitted.instagram,
        linkedin: submitted.linkedIn
      }
    };
    this.userService.updateUser(userPatch).subscribe(
      value => {
        // Update user in local storage
        this.tokenStorageService.setCurrentUser(value);

        // Navigate to home page
        this.router.navigate(['/home'])
      }
    );
  }







}
