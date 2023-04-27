import {Component, ElementRef, ViewChild} from '@angular/core';
import {ProgramDto} from "../../../../../@core/models/program.model";
import {SearchDto} from "../../../../../@core/models/search.model";
import {ProgramService} from "../../../../../@core/services/program-service/program.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submitted-programs',
  templateUrl: './submitted-programs.component.html',
  styleUrls: ['./submitted-programs.component.css']
})
export class SubmittedProgramsComponent {

  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;

  programs: ProgramDto[] = []

  searchKeyword= ""


  selectedCategory = "";

  searchCriteria!: SearchDto

  totalPages!: number
  currentPage = 0;

  constructor(private programService: ProgramService, private router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }
  onCategoryClick(category: string) {
    this.selectedCategory = category.toUpperCase();
    this.loadData();
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

  loadData() {
    this.searchCriteria = {
      keyword: this.searchKeyword,
      page: this.currentPage,
      size: 9
    }
    this.programService.search(this.searchCriteria, this.selectedCategory,'SUBMITTED').subscribe(
      value => {
        this.programs = value.body!
        let headers = value.headers;
        this.totalPages = Number(headers.get('X-Total-Pages')!);
      }
    )
  }

  onSearchPrograms(searchTerm: string) {
    this.searchKeyword = searchTerm;
    this.loadData()
  }
  handleProgramClick(id: number) {
    this.router.navigate(['/dashboard/program-details/' + id]);
  }

  onProgramDelete(id: number) {
    this.programService.deleteProgram(id).subscribe(
      value => {
        this.programs = this.programs.filter((program) => program.id !== id);
      },
      error => {
        alert("cannot delete this program");
      }
    )
  }

  onProgramCancel($event: number) {

  }
}
