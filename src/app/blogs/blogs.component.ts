import {Component, OnInit} from '@angular/core';
import {AuthService} from "../@core/services/authentication/auth.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{

  constructor(private auth: AuthService) {


  }

  ngOnInit() {

  }


}
