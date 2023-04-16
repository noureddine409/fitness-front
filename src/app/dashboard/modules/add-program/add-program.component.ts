import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {equipments, options} from "../../../@shared/constants";
import {ProgramDto, ProgramSectionDto} from "../../../@core/models/program.model";
import {ProgramService} from "../../../@core/services/program-service/program.service";
import {Router} from "@angular/router";
import {OptionsEnum} from "../../../@shared/enums/OptionsEnum";
import {EquipmentEnum} from "../../../@shared/enums/EquipmentEnum";

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css'],
})
export class AddProgramComponent implements OnInit {
  programForm!: FormGroup;
  sectionForm!: FormGroup;

  submitted!: boolean;

  sectionAdded!: boolean;
  selectedOptions = new Set<string>();
  selectedEquipments = new Set<string>();
  myEquipments = new Set(equipments);
  myOptions = new Set(options);
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
        Validators.maxLength(255),
        Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)
      ]],
      'program-picture': [null, [Validators.required]],
      'program-price': ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0)]],
      'program-level': ['beginner', Validators.required],
      'program-category': ['fitness', Validators.required],
      'program-duration': ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0), Validators.max(1440)]],
      'motivation-description': ['', [Validators.minLength(10)]],
      'program-description': ['', [Validators.required, Validators.minLength(10)]],
      'selected-options': [[], Validators.required],
      'selected-equipments': [[], Validators.required]
    });
    this.sectionForm = this.fb.group({
      'section-name': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)
      ]],
      'section-video': [null, Validators.required],
      'section-description': ['', [Validators.required, Validators.minLength(10)]],
      'section-level': ['first', Validators.required],
      'section-picture': [null, [Validators.required]]
    });
    // Subscribe to valueChanges and update selectedOptions array
    this.programForm.get('selected-options')!.valueChanges.subscribe(values => {
      if (values) {
        const selectedOptions = new Set<string>(values.filter((value: string) => value !== ''));
        this.selectedOptions = new Set([...this.selectedOptions, ...selectedOptions]);
      }
    });
    // Subscribe to valueChanges and update selectedEquipments array
    this.programForm.get('selected-equipments')!.valueChanges.subscribe(values => {
      if (values) {
        const selectedEquipments = new Set<string>(values.filter((value: string) => value !== ''));
        this.selectedEquipments = new Set([...this.selectedEquipments, ...selectedEquipments]);
      }
    });

  }

  addSection() {

    this.sectionAdded = true;
    if (this.sectionForm.invalid) {
      return;
    }

    const sectionName = this.sectionForm.get('section-name')!.value;
    const sectionDescription = this.sectionForm.get('section-description')!.value;
    const sectionLevel = "FIRST_LEVEL"
    this.programSectionDto.push({title: sectionName, description: sectionDescription, level: sectionLevel});
    this.multipartPictures.push(this.sectionPicture);
    this.multipartVideos.push(this.sectionVideo);
    console.log(this.programSectionDto);
    this.sectionForm.reset();
    this.sectionAdded = false;
  }

  removeOption(index: number) {
    const selectedOptions = this.selectedOptions;
    let i = 0;
    for (const option of selectedOptions) {
      if (i === index) {
        selectedOptions.delete(option);
        break;
      }
      i++;
    }
    console.log(this.selectedOptions);
  }

  removeEquipment(index: number) {
    const selectedEquipments = this.selectedEquipments;
    let i = 0;
    for (const equipment of selectedEquipments) {
      if (i === index) {
        selectedEquipments.delete(equipment);
        break;
      }
      i++;
    }
    console.log(this.selectedEquipments);
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
      // code to save changes
      const motivation = this.programForm.get('program-motivation')!.value;
      const price = this.programForm.get('program-price')!.value;
      const duration = this.programForm.get('program-duration')!.value;
      const motivationDescription = this.programForm.get('motivation-description')!.value;
      const programDescription = this.programForm.get('program-description')!.value;
      const category = "FITNESS"
      const programLevel = "FIRST_LEVEL"
      this.programDto = {
        name: motivation,
        level: programLevel,

        price: Number(price),
        category: category,
        durationPerDay: Number(duration),
        motivationDescription: motivationDescription,
        description: programDescription,
        equipments: Array.from(this.selectedEquipments).map(equipment => EquipmentEnum[equipment as keyof typeof EquipmentEnum]),
        options: Array.from(this.selectedOptions).map(option => OptionsEnum[option as keyof typeof OptionsEnum]),
        sections: this.programSectionDto,
      }
      ;

      console.log("program toa dd", this.programDto)
      const programBlob = new Blob([JSON.stringify(this.programDto)], {type: 'application/json'});
      console.log("program toa dd", programBlob)
      console.log("program toa dd", this.multipartVideos)
      console.log("program toa dd", this.multipartPictures)
      this.programService.save(programBlob, this.multipartVideos, this.multipartPictures, this.picture).subscribe(
        value => {
          console.log(value);
          // here redirect me to program details
          this.router.navigate(["/dashboard/modify-Program"]);
        },
        error => {
          console.log(error);
        }
      )
    }
  }

  modifyItem(item: ProgramSectionDto) {
    //item.editMode = !item.editMode;
  }

}
