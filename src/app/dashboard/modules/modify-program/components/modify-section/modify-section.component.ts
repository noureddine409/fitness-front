import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProgramService} from "../../../../../@core/services/program-service/program.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProgramSectionDto, ProgramSectionPatchDto} from "../../../../../@core/models/program.model";
import {ALERT_MESSAGES} from "../../../../../@shared/constants";

@Component({
  selector: 'app-modify-section',
  templateUrl: './modify-section.component.html',
  styleUrls: ['./modify-section.component.css']
})
export class ModifySectionComponent implements OnInit {

  @Input()
  programSectionDto!: ProgramSectionDto;
  @Input()
  faqId!: string;
  loading!: boolean;
  multipartVideo!: File;
  multipartPicture!: File;
  sectionForm!: FormGroup;
  errorMessage = "";
  showModal = false;
  sectionAdded!: boolean;
  section!: ProgramSectionPatchDto;
  constructor(private readonly fb: FormBuilder,private readonly programService: ProgramService, private readonly activatedRoute: ActivatedRoute, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.sectionForm = this.fb.group({
    'section-name': [this.programSectionDto.title, [
      Validators.minLength(3),
      Validators.maxLength(255)
    ]],
    'video': [null],
    'section-description': [this.programSectionDto.description, [Validators.minLength(10),Validators.maxLength(255)]],
    'section-level': [this.programSectionDto.level],
    'preview-image': [null]
  });
  }
  modifySection() {

    this.sectionAdded = true;
    if (this.sectionForm.invalid) {
      this.showModal = false;
      return;
    }
    this.showModal = false;
    this.loading = true;
    const sectionName = this.sectionForm.get('section-name')!.value;
    const sectionDescription = this.sectionForm.get('section-description')!.value;
    const sectionLevel = this.sectionForm.get('section-level')!.value;
    this.section={title: sectionName, description: sectionDescription, level: sectionLevel};
    const sectionBlob = new Blob([JSON.stringify(this.section)], {type: 'application/json'});
    console.log(this.multipartPicture);
    this.programService.updateSection(this.programSectionDto.id!, sectionBlob,this.multipartVideo,this.multipartPicture).subscribe(
      (section) => {
        // Set the loading flag to false
        this.loading = false;
      },
      error => {
        // Set the loading flag to false
        this.loading = false;
        this.errorMessage = ALERT_MESSAGES.PROGRAM.ERROR;
      }
    );
    this.sectionAdded = false;
    this.showModal = true;
  }


  onSectionPictureChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.multipartPicture = event.target.files[0];
      console.log(this.multipartPicture);
    }
  }

  onSectionVideoChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.multipartVideo = event.target.files[0];
    }
  }

}
