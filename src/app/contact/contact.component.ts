import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactUsService} from "../@core/services/contact/contact-us.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactFormGroup!: FormGroup;

  errorMessage = "";

  submitted = false;

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
      value => {
        this.submitted = false
      }
    )
  }
}
