import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  showMessage!: boolean;
  @Input()
  message!: string;

  constructor() { }

  ngOnInit(): void {
  }
  onReply() {
    // handle reply button click
  }

}
