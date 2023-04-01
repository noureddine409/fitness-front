import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegistrationService} from "../../services/registration/registration.service";
import {ERROR_MESSAGES} from "../../constants/constants";

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
        password: this.formBuilder.control(null, Validators.required),
        confirmPassword: this.formBuilder.control(null, [Validators.required, this.matchPassword.bind(this)]),
      }
    )
  }

  matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.root.get('password');
    return password && control.value !== password.value ? { 'mismatch': true } : null;
  }

  getErrorMessage(errors: any) {
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
          this.errorMessage = ERROR_MESSAGES.REGISTER.REGISTRATION_FAILED_ALREADY_EXISTS;
        } else {
          this.errorMessage = ERROR_MESSAGES.REGISTER.REGISTRATION_FAILED;
        }
      }
    );
  }
}
