import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProgramDto, ProgramSectionDto} from "../@core/models/program.model";
import {ProgramService} from "../@core/services/program-service/program.service";

@Component({
  selector: 'app-watch-program',
  templateUrl: './watch-program.component.html',
  styleUrls: ['./watch-program.component.css']
})
export class WatchProgramComponent implements OnInit {
  programDto!: ProgramDto;
  programId!: number;
  selectedSection!: ProgramSectionDto;

  constructor(private router: Router, private programService: ProgramService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get("id")
    if (param == null) {
      this.router.navigate(['/error-404']);
      return
    }
    this.programId = parseInt(param, 10);
    this.programService.findById(this.programId).subscribe(
      data => {
        this.programDto = data;
        this.selectedSection = this.programDto.sections[0];
      },
      () => {
        this.router.navigate(["/error-404"]);
      }
    );
  }
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }

  changeVideo(section: ProgramSectionDto) {
    this.selectedSection = section;
  }
}
