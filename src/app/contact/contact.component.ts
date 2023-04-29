import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactUsService} from "../@core/services/contact/contact-us.service";
import {ALERT_MESSAGES} from "../@shared/constants";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactFormGroup!: FormGroup;

  errorMessage = "";

  submitted = false;

  alert!: { message: string; type: string } | null;


  constructor(private formBuilder: FormBuilder, private contactService: ContactUsService) {
  }

  ngOnInit() {

    this.contactFormGroup = this.formBuilder.group(
      {
        name: this.formBuilder.control("", [Validators.required]),
        email: this.formBuilder.control("", [Validators.required, Validators.email]),
        phone: this.formBuilder.control("", [Validators.required]),
        subject: this.formBuilder.control('', [Validators.required]),
        body: this.formBuilder.control('', [Validators.required]),
      }
    )
  }

  handleSubmit() {
    this.submitted=true

    if(this.contactFormGroup.invalid) {
      return
    }

    console.log(this.contactFormGroup.value);
    this.contactService.sendContactUs(this.contactFormGroup.value).subscribe(
      () => {
        this.submitted = false
        this.alert = {
          message: ALERT_MESSAGES.CONTACT.EMAIL_SENT_SUCCESSFULLY,
          type: "success"
        }
        this.contactFormGroup.reset();
      },
      () => {
        this.alert = {
          message: ALERT_MESSAGES.ERROR,
          type: "danger"
        }
      }
    )
  }
}
