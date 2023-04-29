import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-respond',
  templateUrl: './modal-respond.component.html',
  styleUrls: ['./modal-respond.component.css']
})
export class ModalRespondComponent implements OnInit {

  @Output()
  replayClick = new EventEmitter<string>();
  responseForm!: FormGroup;
  submitted!: boolean;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.responseForm=this.fb.group({
      'response': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
    });
  }
  onReply() {
    this.submitted = true;
    if(this.responseForm.invalid) {
      return
    }
    const response = this.responseForm.get('response')!.value;
    this.replayClick.emit(response);
    this.responseForm.reset();
  }
  handleReplayClick($event: string) {


  }

}
