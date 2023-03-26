import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/authentication/auth.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{

  constructor(private auth: AuthService) {


  }

  ngOnInit() {

    this.auth.refreshToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjgwOTI3NDIwLCJpYXQiOjE2Nzk3MTc4MjAsImp0aSI6ImI2NjE0ZDU3LTQ5MDAtNGRmZi1hNzhkLWM2YzU4NzExNDhhMCJ9.nTDGeMts6kyfXLY9cCisLyU75vyuRSw60kM0DQ32KjE')
      .subscribe(value => console.log(value))
  }


}
