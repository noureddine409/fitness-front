import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service/user.service";
import {AppUser} from "../../models/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  updateProfileFormGroup!: FormGroup;

  user!: AppUser;


  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.userService.getCurrentUser().subscribe(
      value => {
        this.user = value
        this.updateProfileFormGroup = this.formBuilder.group(
          {
            firstName: this.formBuilder.control(this.user?.firstName),
            lastName: this.formBuilder.control(this.user?.lastName),
            gender: this.formBuilder.control(this.user?.gender),
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
}
