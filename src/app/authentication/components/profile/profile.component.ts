import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../@core/services/user-service/user.service";
import {AppUser, UserPatch} from "../../../@core/models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../../@core/services/token-storage/token-storage.service";
import {ALERT_MESSAGES} from "../../../@shared/constants";
import {getErrorMessages, matchPassword, passwordValidator} from "../../../utils/validation.util";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  updateProfileFormGroup!: FormGroup;

  user!: AppUser;

  alert!: { message: string; type: string } | null;

  alert_reset_password!: { message: string; type: string } | null;
  resetPasswordFormGroup!: FormGroup;

  submitted!: boolean;

  resetSubmitted = false;


  constructor(private userService: UserService, private formBuilder: FormBuilder, private tokenStorageService: TokenStorageService) {
  }

  getErrorMessage(errors: any) {
    return getErrorMessages(errors);
  }

  ngOnInit() {

    this.resetPasswordFormGroup = this.formBuilder.group(
      {
        oldPassword: this.formBuilder.control(null, Validators.required),
        password: this.formBuilder.control(null, [Validators.required, passwordValidator()]),
        confirmPassword: this.formBuilder.control(null, [Validators.required, matchPassword.bind(this)]),
      }
    )

    this.userService.getCurrentUser().subscribe(
      value => {
        this.user = value
        this.updateProfileFormGroup = this.formBuilder.group(
          {
            firstName: this.formBuilder.control(this.user?.firstName, Validators.required),
            lastName: this.formBuilder.control(this.user?.lastName, Validators.required),
            gender: this.formBuilder.control(this.user?.gender, Validators.required),
            birthday: this.formBuilder.control(this.user?.birthDay),
            phoneNumber: this.formBuilder.control(this.user?.phoneNumber?.phoneNumber),
            city: this.formBuilder.control(this.user?.address?.city),
            country: this.formBuilder.control(this.user?.address?.country),
            postCode: this.formBuilder.control(this.user?.address?.postalCode),
            linkedIn: this.formBuilder.control(this.user?.socialMedia?.linkedin),
            facebook: this.formBuilder.control(this.user?.socialMedia?.facebook),
            twitter: this.formBuilder.control(this.user?.socialMedia?.twitter),
            instagram: this.formBuilder.control(this.user?.socialMedia?.instagram)
          }
        )
      },
      error => {
        console.log(error)
        console.log("err")
      }
    )


  }


  handleUpdate() {
    this.submitted = true

    if (this.updateProfileFormGroup.invalid) {
      return;
    }

    const submittedForm = this.updateProfileFormGroup.value;
    console.log("submitted : ", submittedForm)
    const dateObj = new Date(submittedForm.birthday); // create a new Date object from the string
    const isoString = dateObj.toISOString().split("T")[0];
    console.log("birthday : ", isoString)
    const userPatch: UserPatch = {
      firstName: submittedForm.firstName,
      lastName: submittedForm.lastName,
      birthDay: isoString,
      gender: submittedForm.gender,
      address: {
        country: submittedForm.country,
        city: submittedForm.city,
        postalCode: submittedForm.postCode
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

    console.log("userPatchDto", userPatch)
    this.userService.updateUser(userPatch).subscribe(
      value => {
        // Update user in local storage
        this.tokenStorageService.setCurrentUser(value);
        this.alert = {
          message: ALERT_MESSAGES.PROFILE.SUCCESS,
          type: "success"
        }
        this.submitted = false;
      },
      error => {
        this.alert = {
          message: ALERT_MESSAGES.PROFILE.ERROR,
          type: "danger"
        }
        this.submitted = false;
      }
    );

  }


  resetUpdateProfileForm() {

    this.updateProfileFormGroup.reset({
      firstName: this.user?.firstName,
      lastName: this.user?.lastName,
      gender: this.user?.gender,
      phoneNumber: this.user?.phoneNumber?.phoneNumber,
      city: this.user?.address?.city,
      country: this.user?.address?.country,
      postCode: this.user?.address?.postalCode,
      linkedIn: this.user?.socialMedia?.linkedin,
      facebook: this.user?.socialMedia?.facebook,
      twitter: this.user?.socialMedia?.twitter,
      instagram: this.user?.socialMedia?.instagram
    });

  }

  onFileSelected(event: Event) {
    console.log(event)
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    this.userService.changeProfilePicture(file).subscribe(
      value => {
        this.user.profilePicture = value.profilePicture;
        this.tokenStorageService.setCurrentUser(value);
      }
    )
  }

  resetPassword() {
    this.resetSubmitted = true
    if (this.resetPasswordFormGroup.invalid) {
      return;
    }
    const oldPassword = this.resetPasswordFormGroup.value.oldPassword;
    const newPassword = this.resetPasswordFormGroup.value.password;
    this.userService.resetPassword(oldPassword, newPassword).subscribe(value => {
        console.log("updating .......")
        this.alert_reset_password = {
          message: ALERT_MESSAGES.RESET_PASSWORD.SUCCESS,
          type: "success"
        }
      },
      (error) => {
        if (error.status === 401) {
          this.alert_reset_password = {
            message: ALERT_MESSAGES.RESET_PASSWORD.INVALID_PASSWORD,
            type: "danger"
          }
        } else {
          this.alert_reset_password = {
            message: ALERT_MESSAGES.RESET_PASSWORD.ERROR,
            type: "danger"
          }
        }
        this.resetSubmitted = false;
      })
  }
}
