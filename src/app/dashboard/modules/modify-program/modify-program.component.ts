import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ALERT_MESSAGES, equipments, categories} from "../../../@shared/constants";
import {ProgramDto, ProgramPatchDto, ProgramSectionDto} from "../../../@core/models/program.model";
import {ProgramService} from "../../../@core/services/program-service/program.service";
import {ActivatedRoute, Router} from "@angular/router";
import {removeFromSetAtIndex, updateSetFromValueChanges} from "../../../utils/selection-box.util";

@Component({
  selector: 'app-modify-program',
  templateUrl: './modify-program.component.html',
  styleUrls: ['./modify-program.component.css'],
})
export class ModifyProgramComponent implements OnInit {
  programForm!: FormGroup;
  sectionForm!: FormGroup;

  errorMessage = "";

  submitted!: boolean;
  loading!: boolean;

  selectedOptions = new Set<string>();
  selectedEquipments = new Set<string>();
  myEquipments: Map<string, string> = equipments
  myOptions: Map<string, string> = categories
  programDto!: ProgramPatchDto;
  programId!: number;
  programData!: ProgramDto;
  programSections: ProgramSectionDto[] = [];

  constructor(private readonly programService: ProgramService, private readonly fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get("id")
    if (param == null) {
      this.router.navigate(['/error-404']);
      return;
    }
    this.programId = parseInt(param, 10);
    this.programService.findById(this.programId).subscribe(
      data => {
        this.programData = data;
        this.programSections=this.programData.sections;
        console.log(this.programSections);
        this.initializeProgramForm();
      },
      () => {
        this.router.navigate(["/error-404"]);
      }
    );
  }

  initializeProgramForm() {
    this.programForm = this.fb.group({
      'program-motivation': [this.programData.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      'program-price': [this.programData.price, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0)]],
      'program-level': [this.programData.level, Validators.required],
      'program-category': [this.programData.category, Validators.required],
      'program-duration': [this.programData.durationPerDay, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0), Validators.max(1440)]],
      'motivation-description': [this.programData.motivationDescription, [Validators.minLength(10), Validators.maxLength(255)]],
      'program-description': [this.programData.description, [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      'selected-options': [[this.programData.options]],
      'selected-equipments': [[this.programData.equipments]]
    });


    updateSetFromValueChanges(this.selectedOptions, 'selected-options', this.programForm);
    updateSetFromValueChanges(this.selectedEquipments, 'selected-equipments', this.programForm);
  }


  removeOption(index: number) {
    removeFromSetAtIndex(this.selectedOptions, index);

  }

  removeEquipment(index: number) {
    removeFromSetAtIndex(this.selectedEquipments, index);
  }


  saveChanges() {
    this.submitted = true;

    if (this.programForm.invalid) {
      return;
    }

    if (confirm("Are you sure you want to save changes?")) {
      // Set the loading flag to true
      this.loading = true;

      const motivation = this.programForm.get('program-motivation')!.value;
      const price = this.programForm.get('program-price')!.value;
      const duration = this.programForm.get('program-duration')!.value;
      const motivationDescription = this.programForm.get('motivation-description')!.value;
      const programDescription = this.programForm.get('program-description')!.value;
      const category = this.programForm.get('program-category')!.value;
      const programLevel = this.programForm.get('program-level')!.value;

      console.log(this.selectedEquipments)
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
      };

      this.programService.update(this.programId, this.programDto).subscribe(
        (program) => {
          // Set the loading flag to false
          this.loading = false;
          this.router.navigate([`/dashboard/program-details/${program!.id}`]);
        },
        error => {
          // Set the loading flag to false
          this.loading = false;
          this.errorMessage = ALERT_MESSAGES.PROGRAM.ERROR;
        }
      );
    }
  }


}


