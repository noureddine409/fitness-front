import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {JoinDto, JoinTreatDto} from "../../../../../@core/models/join.model";
import {JoinService} from "../../../../../@core/services/join/join.service";

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css']
})
export class RequestCardComponent {
  requestTreat!: JoinTreatDto;
  showImage = false;

  @Input()
  request!: JoinDto;
  @Output() requestClick = new EventEmitter<number>();

  constructor(private requestService: JoinService, private router: Router) {
  }

  accessRequest(id: number) {
    this.requestClick.emit(id);
  }

  refuseRequest() {
    this.requestTreat = {
      accepted: false
    }
    this.requestService.treatRequest(this.request.id!, this.requestTreat).subscribe(
      (response) => {
        //this.router.navigate(['/dashboard/requests']);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );

  }

  acceptRequest() {
    this.requestTreat = {
      accepted: true
    }
    this.requestService.treatRequest(this.request.id!, this.requestTreat).subscribe(
      (response) => {
        //this.router.navigate(['/dashboard/requests']);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );

  }

  showPicture() {
    this.showImage = !this.showImage;
  }
}
