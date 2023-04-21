import { Component } from '@angular/core';
import {TrainerModel} from "../@core/models/trainer.model";

@Component({
  selector: 'app-our-trainers',
  templateUrl: './our-trainers.component.html',
  styleUrls: ['./our-trainers.component.css']
})
export class OurTrainersComponent {
  trainers:TrainerModel[]=[];
  constructor() {
    this.trainers=[
      {
       firstName:"Juan",
       lastName:"manuel",
       picture:"../../assets/images/blog/default/thum1.jpg",
       Biography:"Given that you want an exhaustive list of all possible title ideas for your keyword, you certainly can!"
      },
      {
        firstName:"Stanley",
        lastName:"Berry",
        picture:"../../assets/images/blog/default/thum2.jpg",
        Biography:"Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content that their readers crave, but even the best struggle with delivering content to the right person at the right time"
      },
      {
        firstName:"Gunnar",
        lastName:"Peterson",
        picture:"../../assets/images/blog/default/thum3.jpg",
        Biography:"To make sure your content drives results, the format needs to be just as well-researched as the information contained in it."
      }
    ]
  }

}
