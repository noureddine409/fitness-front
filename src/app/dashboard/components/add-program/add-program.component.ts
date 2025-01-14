import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ALERT_MESSAGES, categories, equipments} from "../../../@shared/constants";
import {ProgramDto, ProgramSectionDto} from "../../../@core/models/program.model";
import {ProgramService} from "../../../@core/services/program-service/program.service";
import {Router} from "@angular/router";
import {removeFromSetAtIndex, updateSetFromValueChanges} from "../../../utils/selection-box.util";

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css'],
})
export class AddProgramComponent implements OnInit {
  programForm!: FormGroup;
  sectionForm!: FormGroup;

  errorMessage = "";

  submitted!: boolean;
  showModal = false;
  loading!: boolean;


  sectionAdded!: boolean;
  selectedOptions = new Set<string>();
  selectedEquipments = new Set<string>();
  myEquipments: Map<string, string> = equipments
  myOptions: Map<string, string> = categories
  programSectionDto: ProgramSectionDto[] = [];
  programDto!: ProgramDto;
  private multipartVideos: File[] = [];
  private multipartPictures: File[] = [];
  private picture!: File;
  private sectionPicture!: File;
  private sectionVideo!: File;

  constructor(private readonly programService: ProgramService, private readonly fb: FormBuilder, private router: Router) {
  }


  ngOnInit() {
    this.programForm = this.fb.group({
      'program-motivation': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      'program-picture': [null, [Validators.required]],
      'program-price': ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0)]],
      'program-level': ['BEGINNER', Validators.required],
      'program-category': ['FITNESS', Validators.required],
      'program-duration': ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0), Validators.max(1440)]],
      'motivation-description': ['', [Validators.minLength(10),Validators.maxLength(255)]],
      'program-description': ['', [Validators.required, Validators.minLength(10),Validators.maxLength(255)]],
      'selected-options': [[]],
      'selected-equipments': [[]]
    });
    this.sectionForm = this.fb.group({
      'section-name': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      'section-video': [null, Validators.required],
      'section-description': ['', [Validators.required, Validators.minLength(10),Validators.maxLength(255)]],
      'section-level': ['FIRST_LEVEL', Validators.required],
      'section-picture': [null, [Validators.required]]
    });


    updateSetFromValueChanges(this.selectedOptions, 'selected-options', this.programForm);
    updateSetFromValueChanges(this.selectedEquipments, 'selected-equipments', this.programForm);


  }
  addSection() {

    this.sectionAdded = true;
    if (this.sectionForm.invalid) {
      this.showModal = false;
      return;
    }
    this.showModal = true;
    const sectionName = this.sectionForm.get('section-name')!.value;
    const sectionDescription = this.sectionForm.get('section-description')!.value;
    const sectionLevel = this.sectionForm.get('section-level')!.value;
    this.programSectionDto.push({title: sectionName, description: sectionDescription, level: sectionLevel});
    this.multipartPictures.push(this.sectionPicture);
    this.multipartVideos.push(this.sectionVideo);
    this.sectionForm.reset();
    this.sectionAdded = false;
  }



  removeOption(index: number) {
    removeFromSetAtIndex(this.selectedOptions, index);

  }

  removeEquipment(index: number) {
    removeFromSetAtIndex(this.selectedEquipments, index);
  }




  deleteSection(sectionDto: ProgramSectionDto) {
    this.programSectionDto = this.programSectionDto.filter(i => i !== sectionDto);
    this.deleteFiles(this.programSectionDto.indexOf(sectionDto));
  }

  deleteFiles(index: number) {
    this.multipartVideos.splice(index, 1);
    this.multipartPictures.splice(index, 1);
  }

  onPictureChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.picture = event.target.files[0];
    }
  }

  onSectionPictureChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.sectionPicture = event.target.files[0];
    }
  }

  onSectionVideoChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.sectionVideo = event.target.files[0];
    }
  }


  saveChanges() {
    this.submitted = true;

    if (this.programForm.invalid) {
      return;
    }

    if (confirm("Are you sure you want to save changes?")) {
      this.loading = true;

      const motivation = this.programForm.get('program-motivation')!.value;
      const price = this.programForm.get('program-price')!.value;
      const duration = this.programForm.get('program-duration')!.value;
      const motivationDescription = this.programForm.get('motivation-description')!.value;
      const programDescription = this.programForm.get('program-description')!.value;
      const category = this.programForm.get('program-category')!.value;
      const programLevel = this.programForm.get('program-level')!.value;

      this.programDto = {
        name: motivation,
        level: programLevel,
        price: Number(price),
        category: category,
        durationPerDay: Number(duration),
        motivationDescription: motivationDescription,
        description: programDescription,
        equipments: [...this.selectedEquipments],
        options: [...this.selectedOptions],
        sections: this.programSectionDto,
      };

      const programBlob = new Blob([JSON.stringify(this.programDto)], {type: 'application/json'});

      this.programService.save(programBlob, this.multipartVideos, this.multipartPictures, this.picture).subscribe(
        (program) => {
          // Set the loading flag to false
          this.loading = false;
          this.router.navigate([`/dashboard/program-details/${program!.id}`]);
        },
        () => {
          this.loading = false;
          this.errorMessage = ALERT_MESSAGES.PROGRAM.ERROR;
        }
      );
    }
  }



  modifyItem(item: ProgramSectionDto) {
    //item.editMode = !item.editMode;
  }


}


