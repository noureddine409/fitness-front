import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {equipments, options} from "../../../@shared/constants";
import {Item} from "../../../@core/models/Items.model";
import {ProgramDetails} from "../../../@core/models/program-details.model";

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css']
})
export class AddProgramComponent implements OnInit {
  myForm = new FormGroup({
    'section-name': new FormControl('', Validators.required),
    'section-video': new FormControl('', Validators.required),
    'section-description': new FormControl(''),
    'program-motivation': new FormControl(''),
    'program-picture': new FormControl(''),
    'program-price': new FormControl(''),
    'program-duration': new FormControl(''),
    'motivation-description': new FormControl(''),
    'program-description': new FormControl(''),
    'program-options': new FormArray([]),
    'program-equipments': new FormArray([])

  });
  showTable = false; // Add this line to declare and initialize the variable
  showEquipment = false;
  equipments = equipments;
  myequipments: string[] = [];
  myOptions: string[] = [];

  chunkedElements: string[][] = [];
  items: Item[] = [];
  details!: ProgramDetails;
  ngOnInit() {
    this.chunkedElements = this.chunkArray(options, 7);
  }

  chunkArray(array: any[], size: number): any[][] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
  addItem(sectionLevel: string) {
    const sectionName = this.myForm.get('section-name')!.value;
    const sectionVideo = this.myForm.get('section-video')!.value;
    const sectionDescription = this.myForm.get('section-description')!.value;

    this.items.push({name: sectionName, video: sectionVideo, description: sectionDescription, level: sectionLevel});
    console.log(this.items);
  }

  deleteItem(item: { name: string | null; video: string | null; }) {
    this.items = this.items.filter(i => i !== item);
  }
  onOptionChange(option: string, isChecked: boolean) {
    const optionArray = this.myForm.get('program-options') as FormArray;

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
    const equipmentArray = this.myForm.get('program-equipments') as FormArray;

    if (isChecked) {
      equipmentArray.push(new FormControl(equipment));
    } else {
      const index = equipmentArray.controls.findIndex(x => x.value === equipment);
      equipmentArray.removeAt(index);
    }
    this.myequipments = equipmentArray.value;
    console.log(this.myequipments);
  }

  getFileName(filePath: any) {
    return filePath.split('\\').pop().split('/').pop();
  }

  saveChanges(category: string, programLevel: string) {
    if (confirm("Are you sure you want to save changes?")) {
      // code to save changes
      const motivation = this.myForm.get('program-motivation')!.value;
      const picture = this.myForm.get('program-picture')!.value;
      const price = this.myForm.get('program-price')!.value;
      const duration = this.myForm.get('program-duration')!.value;
      const motivationDescription = this.myForm.get('motivation-description')!.value;
      const programDescription = this.myForm.get('program-description')!.value;

      this.details = {
        motivation: motivation,
        picture: picture,
        programLevel: programLevel,
        price: price,
        category: category,
        duration: duration,
        motivationDescription: motivationDescription,
        programDescription: programDescription,
        programEquipments: this.myequipments,
        programOptions: this.myOptions,
        items: this.items
      };
      console.log(this.details);
      this.myForm.reset();
      //Todo save data to server
    }
  }

}
