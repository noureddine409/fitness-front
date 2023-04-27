import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProgramService} from "../../../@core/services/program-service/program.service";
import {ProgramDto} from "../../../@core/models/program.model";

@Component({
  selector: 'app-programs',
  templateUrl: './trainer-programs.component.html',
  styleUrls: ['./trainer-programs.component.css']
})
export class TrainerProgramsComponent implements OnInit {

  Programs: ProgramDto[] = [];

  currentPage: number = 0;
  totalPages: number = 3;

  constructor(private router: Router, private programService: ProgramService) {
  }

  goToOtherComponent(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.programService.findTrainerPrograms(this.currentPage).subscribe(response => {
      this.Programs = response.body!;
      let headers = response.headers;
      this.totalPages = Number(headers.get('X-Total-Pages')!);
    })
  }


  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadData();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadData();
    }
  }

  generatePageRange() {
    const pageRange = [];
    const start = Math.max(0, this.currentPage - 2);
    const end = Math.min(this.totalPages - 1, this.currentPage + 2);
    for (let i = start; i <= end; i++) {
      pageRange.push(i);
    }
    return pageRange;
  }

  handleProgramClick(id: number) {
    this.router.navigate(['/dashboard/program-details/' + id]);
  }

  onProgramDelete(id: number) {
    this.programService.deleteProgram(id).subscribe(
      value => {
        this.Programs = this.Programs.filter((program) => program.id !== id);
      },
      error => {
        alert("cannot delete this program");
      }
    )
  }

  onProgramCancel(id: number) {

  }


  onProgramSubmit(id: number) {

  }
}
