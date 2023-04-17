import {Component, OnInit} from '@angular/core';
import {ProgramDto} from "../../../@core/models/program.model";
import {ProgramService} from "../../../@core/services/program-service/program.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modify-program',
  templateUrl: './modify-program.component.html',
  styleUrls: ['./modify-program.component.css']
})
export class ModifyProgramComponent implements OnInit {
  programDto!: ProgramDto;

  programId!: number

  constructor(private router: Router, private programService: ProgramService, private activatedRoute: ActivatedRoute) {
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
      error => {

      }
    )
  }

}
