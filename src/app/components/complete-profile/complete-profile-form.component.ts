import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Step} from "../../models/step.model";
import {COMPLETE_PROFILE_FORM_STEPS} from "../../constants/constants";
import {UserPatch} from "../../models/user.model";
import {UserService} from "../../services/user-service/user.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";

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
  @Input() steps: Step[] = COMPLETE_PROFILE_FORM_STEPS

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private tokenStorageService: TokenStorageService) {


  }

  ngOnInit() {

    const formGroupObj: Form = {};
    this.steps.forEach((step, index) => {
      step.fields.forEach(field => {
        formGroupObj[field.name] = ['', Validators.required];
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



  goToStep(step: number) {
    this.currentStep = step;
  }

  submitForm() {
    const submitted = this.form.value;
    const userPatch: UserPatch = {
      firstName: submitted.firstName,
      lastName: submitted.lastName,
      gender: submitted.gender,
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
