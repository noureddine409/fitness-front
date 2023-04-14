import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {equipments, options} from "../../../@shared/constants";
import {ProgramDto, ProgramSectionDto} from "../../../@core/models/program.model";
import {ProgramService} from "../../../@core/services/program-service/program.service";

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css']
})
export class AddProgramComponent implements OnInit {
  programForm!: FormGroup;
  sectionForm!: FormGroup;

  constructor(private programService: ProgramService, private fb: FormBuilder) {
  }


  ngOnInit() {
    this.chunkedElements = this.chunkArray(options, 7);
    this.programForm = this.fb.group({
      'program-motivation': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)
      ]],
      'program-picture': [null],
      'program-price': ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0)]],
      'program-level': ['beginner', Validators.required],
      'program-category': ['fitness', Validators.required],
      'program-duration': ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0), Validators.max(1440)]],
      'motivation-description': ['', [Validators.minLength(10)]],
      'program-description': ['', [Validators.required, Validators.minLength(10)]],
      'program-options': this.fb.array([]),
      'program-equipments': this.fb.array([])
    });
    this.sectionForm = this.fb.group({
      'section-name': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)
      ]],
      'section-video': [null],
      'section-description': ['', [Validators.required, Validators.minLength(10)]],
      'section-level': ['first', Validators.required],
      'section-picture': [null]
    });

  }

  showTable = false; // Add this line to declare and initialize the variable
  showEquipment = false;
  equipments = new Set(equipments);
  myequipments = new Set<string>();
  myOptions = new Set<string>();

  chunkedElements: string[][] = [];

  // TODO work with this instead
  items: ProgramSectionDto[] = [];
  details!: ProgramDto;
  multipartVideos: File[] = [];
  multipartPictures: File[] = [];
  picture!: File;
  sectionPicture!: File;
  sectionVideo!: File;

  chunkArray(array: any[], size: number): any[][] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  addItem() {
    const sectionName = this.sectionForm.get('section-name')!.value;
    const sectionDescription = this.sectionForm.get('section-description')!.value;
    const sectionLevel = this.sectionForm.get('section-level')!.value;
    this.items.push({title: sectionName, description: sectionDescription, level: sectionLevel});
    this.multipartPictures.push(this.sectionPicture);
    this.multipartVideos.push(this.sectionVideo);
    console.log(this.items);
    this.sectionForm.reset();
  }

  deleteItem(item: ProgramSectionDto) {
    this.items = this.items.filter(i => i !== item);
    this.deleteVideo(this.items.indexOf(item));
    this.deletePicture(this.items.indexOf(item));
  }

  deleteVideo(index: number) {
    this.multipartVideos.splice(index, 1);
  }

  deletePicture(index: number) {
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

  //this.multipartPictures.push(file);

  onSectionVideoChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.sectionVideo = event.target.files[0];
    }
  }

  onOptionChange(option: string, isChecked: boolean) {
    const optionArray = this.programForm.get('program-options') as FormArray;

    if (isChecked) {
      optionArray.push(new FormControl(option));
    } else {
      const index = optionArray.controls.findIndex(x => x.value === option);
      optionArray.removeAt(index);
    }
    this.myOptions = optionArray.value;
    console.log(this.myOptions);
  }


  onEquipmentChange(equipment: string, isChecked: boolean) {
    const equipmentArray = this.programForm.get('program-equipments') as FormArray;

    if (isChecked) {
      equipmentArray.push(new FormControl(equipment));
    } else {
      const index = equipmentArray.controls.findIndex(x => x.value === equipment);
      equipmentArray.removeAt(index);
    }
    this.myequipments = equipmentArray.value;
    console.log(this.myequipments);
  }

  saveChanges(category: string, programLevel: string) {
    if (confirm("Are you sure you want to save changes?")) {
      // code to save changes
      const motivation = this.programForm.get('program-motivation')!.value;
      const picture = this.programForm.get('program-picture')!.value;
      const price = this.programForm.get('program-price')!.value;
      const duration = this.programForm.get('program-duration')!.value;
      const motivationDescription = this.programForm.get('motivation-description')!.value;
      const programDescription = this.programForm.get('program-description')!.value;
      this.details = {
        name: motivation,
        level: programLevel,
        price: Number(price),
        category: category,
        durationPerDay: Number(duration),
        motivationDescription: motivationDescription,
        description: programDescription,
        equipments: this.myequipments,
        options: this.myOptions,
        sections: this.items,
        picture: picture
      };
      this.programService.save(this.details, this.multipartVideos);
      console.log(this.details);
      console.log(this.multipartVideos);
      this.multipartVideos = [];
      this.multipartPictures = [];
      this.programForm.reset();
      //Todo save data to server (use program service i created it for you )
    }
  }

}
