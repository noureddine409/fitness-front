import {Component, OnInit} from '@angular/core';
import {ProgramDto} from "../@core/models/program.model";
import {Router} from "@angular/router";
import {ProgramService} from "../@core/services/program-service/program.service";
import {SearchDto} from "../@core/models/search.model";

@Component({
  selector: 'app-our-programs',
  templateUrl: './our-programs.component.html',
  styleUrls: ['./our-programs.component.css']
})
export class OurProgramsComponent implements OnInit {
  programs!: ProgramDto[];
  searchDto!: SearchDto;
  currentPage: number = 0;
  currentFitnessPage: number = 0;
  currentNutritionPage: number = 0;
  currentMindsetPage: number = 0;
  currentYogaPage: number = 0;
  totalPages: number = 3;
  totalFitnessPages: number = 3;
  totalNutritionPages: number = 3;
  totalMindsetPages: number = 3;
  totalYogaPages: number = 3;
  category: string = "all";

  constructor(private router: Router, private programService: ProgramService) {
  }

  goToOtherComponent(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit() {
    this.loadData("all");
  }

  loadData(category: string) {
    this.programs = [];
    this.searchDto = {
      page: this.currentPage,
      size: 6,
      keyword: ""
    }
    let programServiceMethod;
    switch (category) {
      case 'FITNESS':
        this.category = 'FITNESS';
        programServiceMethod = this.programService.findByCategory('FITNESS', this.currentFitnessPage);
        break;
      case 'NUTRITION':
        this.category = 'NUTRITION';
        programServiceMethod = this.programService.findByCategory('NUTRITION', this.currentNutritionPage);
        break;
      case 'MINDSET':
        this.category = 'MINDSET';
        programServiceMethod = this.programService.findByCategory('MINDSET', this.currentMindsetPage);
        break;
      case 'YOGA':
        this.category = 'YOGA';
        programServiceMethod = this.programService.findByCategory('YOGA', this.currentYogaPage);
        break;
      default:
        this.category = 'all';
        programServiceMethod = this.programService.search(this.searchDto);
        break;
    }
    programServiceMethod.subscribe(response => {
      this.programs = response.body!;
      let headers = response.headers;
      switch (category) {
        case 'FITNESS':
          this.totalFitnessPages = Number(headers.get('X-Total-Pages')!);
          break;
        case 'NUTRITION':
          this.totalNutritionPages = Number(headers.get('X-Total-Pages')!);
          break;
        case 'MINDSET':
          this.totalMindsetPages = Number(headers.get('X-Total-Pages')!);
          break;
        case 'YOGA':
          this.totalYogaPages = Number(headers.get('X-Total-Pages')!);
          break;
        default:
          this.totalPages = Number(headers.get('X-Total-Pages')!);
      }
    });
  }

  increasePage(category: string) {
    switch (category) {
      case 'FITNESS':
        this.currentFitnessPage++;
        break;
      case 'NUTRITION':
        this.currentNutritionPage++;
        break;
      case 'MINDSET':
        this.currentMindsetPage++;
        break;
      case 'YOGA':
        this.currentYogaPage++;
        break;
      default:
        this.currentPage++;
    }
  }

  decreasePage(category: string) {
    switch (category) {
      case 'FITNESS':
        this.currentFitnessPage--;
        break;
      case 'NUTRITION':
        this.currentNutritionPage--;
        break;
      case 'MINDSET':
        this.currentMindsetPage--;
        break;
      case 'YOGA':
        this.currentYogaPage--;
        break;
      default:
        this.currentPage--;
    }
  }

  nextPage(category: string) {
    if (this.currentPage < this.totalPages - 1) {
      this.increasePage(category);
      this.loadData(category);
    }
  }

  previousPage(category: string) {
    if (this.currentPage > 0) {
      this.decreasePage(category);
      this.loadData(category);
    }
  }

  generatePageRange(category: string) {
    let currentPage, totalPage;
    switch (category) {
      case 'FITNESS':
        currentPage = this.currentFitnessPage;
        totalPage = this.totalFitnessPages;
        break;
      case 'NUTRITION':
        currentPage = this.currentNutritionPage;
        totalPage = this.totalNutritionPages;
        break;
      case 'MINDSET':
        currentPage = this.currentMindsetPage;
        totalPage = this.totalMindsetPages;
        break;
      case 'YOGA':
        currentPage = this.currentYogaPage;
        totalPage = this.totalYogaPages;
        break;
      default:
        currentPage = this.currentPage;
        totalPage = this.totalPages;
        break;
    }
    const start = Math.max(0, currentPage - 2);
    const end = Math.min(totalPage - 1, currentPage + 2);
    return Array.from({length: end - start + 1}, (_, i) => start + i);
  }
}
