import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Step} from "../../../@core/models/step.model";
import {COMPLETE_PROFILE_FORM_STEPS} from "../../../@shared/constants";
import {UserPatch} from "../../../@core/models/user.model";
import {UserService} from "../../../@core/services/user-service/user.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../@core/services/token-storage/token-storage.service";
import {getErrorMessages} from "../../../utils/validation.util";

interface Form {
  [key: string]: any;
}

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './complete-profile-form.component.html',
  styleUrls: ['./complete-profile-form.component.css']
})
export class CompleteProfileFormComponent implements OnInit {

  form!: FormGroup;
  currentStep = 0;

  submitted = false;
  @Input() steps: Step[] = COMPLETE_PROFILE_FORM_STEPS

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private tokenStorageService: TokenStorageService) {


  }

  ngOnInit() {

    const formGroupObj: Form = {};
    this.steps.forEach((step, index) => {
      step.fields.forEach(field => {
        if (field.name === 'firstName' || field.name === 'lastName' || field.name === 'gender') {
          formGroupObj[field.name] = [null, Validators.required];
        } else {
          formGroupObj[field.name] = [null, Validators.nullValidator];
        }
      });
    });
    this.form = this.formBuilder.group(formGroupObj);


    this.tokenStorageService.currentUser$.subscribe(
      user => {
        if (user) {
          const simplifiedUser = this.simplifyUser(user)
          console.log(simplifiedUser)
          console.log("user", user)
          this.steps.forEach((step, index) => {
            step.fields.forEach(field => {
              const defaultValue = simplifiedUser[field.name] || '';
              this.form.controls[field.name].setValue(defaultValue);
            });
          });
        }
      }
    );



  }

  simplifyUser(user: any) {
    const simplifiedUser: any = {};
    Object.keys(user).forEach(key => {
      if (typeof user[key] === 'object' && user[key] !== null) {
        Object.keys(user[key]).forEach(innerKey => {
          simplifiedUser[innerKey] = user[key][innerKey];
        });
      } else {
        simplifiedUser[key] = user[key];
      }
    });
    return simplifiedUser;
  }


  getErrorMessage(errors: any) {
    return getErrorMessages(errors);
  }




  goToStep(step: number) {
    if(this.form.invalid) {
      return;
    }
    this.currentStep = step;
  }

  submitForm() {
    this.submitted = true;

    if(this.form.invalid) {
      return;
    }
    const submittedForm = this.form.value;
    const dateObj = new Date(submittedForm.birthDay); // create a new Date object from the string
    const isoString = dateObj.toISOString().split("T")[0];
    const userPatch: UserPatch = {
      firstName: submittedForm.firstName,
      lastName: submittedForm.lastName,
      gender: submittedForm.gender,
      birthDay: isoString,
      address: {
        country: submittedForm.country,
        city: submittedForm.city,
        postalCode: submittedForm.postalCode
      },
      phoneNumber: {
        region: "MA",
        phoneNumber: submittedForm.phone
      },
      socialMedia: {
        facebook: submittedForm.facebook,
        twitter: submittedForm.twitter,
        instagram: submittedForm.instagram,
        linkedin: submittedForm.linkedIn
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
