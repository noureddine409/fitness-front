import {Component, OnInit} from '@angular/core';
import {ProgramDto} from "../../../@core/models/program.model";
import {ProgramService} from "../../../@core/services/program-service/program.service";
import {ActivatedRoute, Router} from "@angular/router";
import {equipments, categories} from "../../../@shared/constants";

@Component({
  selector: 'app-program-details',
  templateUrl: './trainer-program.component.html',
  styleUrls: ['./trainer-program.component.css']
})
export class TrainerProgramComponent implements OnInit {
  programDto!: ProgramDto;
  programId!: number

  constructor(private router: Router, private programService: ProgramService, private activatedRoute: ActivatedRoute) {
  }

  getValuesFromMapOptions(keys: string[]): string {
    return keys.map(key => categories.get(key)).join(' | ');
  }
  getValueFromMapCategories(key: string): string {
    return categories.get(key) || '';
  }

  getValuesFromMapEquipments(keys: string[]): string {
    return keys.map(key => equipments.get(key)).join(' | ');
  }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get("id")
    if(param ==null) {
      this.router.navigate(['/error-404']);
      return
    }
    this.programId = parseInt(param , 10);
    this.programService.findById(this.programId).subscribe(
      data => {
        this.programDto = data;
      },
      () => {
        this.router.navigate(["/error-404"]);
      }
    )
  }

  goToWatchPage() {
    this.router.navigate([`/watch-program/${(this.programId)}`]);
  }
  splitDescription(description: string): string[] {
    const maxLength = 200;
    const sentences = description.match(/[^.!?]+[.!?]+/g) || [description];
    const result = [];
    let currentString = '';
    for (const sentence of sentences) {
      if (currentString.length + sentence.length <= maxLength) {
        currentString += sentence;
      } else {
        result.push(currentString);
        currentString = sentence;
      }
    }
    if (currentString) {
      result.push(currentString);
    }
    return result;
  }
}
