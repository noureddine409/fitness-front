import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegistrationService} from "../../../@core/services/registration/registration.service";
import {getErrorMessages, matchPassword, passwordValidator} from "../../../utils/validation.util";
import {ALERT_MESSAGES} from "../../../@shared/constants";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  errorMessage = "";

  registerFormGroup!: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.registerFormGroup = this.formBuilder.group(
      {
        email: this.formBuilder.control(null, [Validators.required, Validators.email]),
        password: this.formBuilder.control(null, [Validators.required, passwordValidator()]),
        confirmPassword: this.formBuilder.control(null, [Validators.required, matchPassword.bind(this)]),
      }
    )
  }

  getErrorMessage(errors: any) {
    return getErrorMessages(errors);
  }

  handleRegister() {

    console.log(this.registerFormGroup.controls['confirmPassword'].errors)

    this.submitted = true

    if(this.registerFormGroup.invalid){
      return
    }

    let email = this.registerFormGroup.value.email
    let password = this.registerFormGroup.value.password

    this.registrationService.register(email, password).subscribe(
      () => {
        this.router.navigate(['/activate-account']);
      },
      (error) => {
        if (error.status === 302) {
          this.errorMessage = ALERT_MESSAGES.REGISTER.REGISTRATION_FAILED_ALREADY_EXISTS;
        } else {
          this.errorMessage = ALERT_MESSAGES.REGISTER.REGISTRATION_FAILED;
        }
      }
    );
  }
}
