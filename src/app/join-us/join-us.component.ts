import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {JoinService} from "../@core/services/join/join.service";
import {ALERT_MESSAGES, categories} from "../@shared/constants";
import {JoinDto} from "../@core/models/join.model";

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit{
  join!: JoinDto;
  loading!: boolean;
  errorMessage: string = '';
  joinForm!: FormGroup;
  submitted!: boolean;
  documents!: File[];
  myOptions: Map<string, string> = categories

  constructor(private readonly joinService: JoinService, private readonly fb: FormBuilder, private router: Router, private changeDetector: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.joinForm = this.fb.group({
      'trainer-address': ['', [Validators.required, Validators.minLength(10),Validators.maxLength(255)]],
      'motivation-message': ['', [Validators.required, Validators.minLength(10),Validators.maxLength(255)]],
      'trainer-experience': ['', [Validators.required, Validators.minLength(10),Validators.maxLength(255)]],
      'trainer-expertise': ['FITNESS', Validators.required],
      'trainer-documents': [null, Validators.required],
    });
  }
  onPictureChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.documents = event.target.files;
      console.log(this.documents);
    }
  }

  saveChanges() {
    this.submitted = true;

    if (this.joinForm.invalid) {
      return;
    }
      this.loading = true;

      const message = this.joinForm.get('motivation-message')!.value;
      const experience = this.joinForm.get('trainer-experience')!.value;
      const expertise = this.joinForm.get('trainer-expertise')!.value;
      this.join = {
        message: message,
        experience: experience,
        expertise: expertise,
        approved: false,
      }
      const joinBlob = new Blob([JSON.stringify(this.join)], {type: 'application/json'});
      console.log(this.documents);
      console.log(joinBlob);
      this.joinService.becomeTrainer(joinBlob, this.documents).subscribe(
        (join) => {
          // Set the loading flag to false
          this.loading = false;
          this.joinForm.reset();
          this.router.navigate(["/home"]);
        },
        error => {
          // Set the loading flag to false
          this.loading = false;
          this.errorMessage = ALERT_MESSAGES.REQUEST.ERROR;
        }
      );
      this.submitted = false;

  }
}
