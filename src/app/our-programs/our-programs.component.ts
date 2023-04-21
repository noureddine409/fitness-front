import {Component, OnInit} from '@angular/core';
import {ProgramDto} from "../@core/models/program.model";

@Component({
  selector: 'app-our-programs',
  templateUrl: './our-programs.component.html',
  styleUrls: ['./our-programs.component.css']
})
export class OurProgramsComponent implements OnInit{
  programs!: ProgramDto[];
  constructor() {
    this.programs = [
      {
        id: 1,
        name: "Yoga for Beginners",
        level: "Beginner",
        price: 29.99,
        category: "Yoga",
        description: "Learn the basics of yoga with this comprehensive program.",
        durationPerDay: 30,
        options: ["Downloadable Worksheets", "Email Support"],
        equipments: ["Yoga Mat", "Yoga Blocks", "Yoga Strap"],
        picture: "../../assets/images/programs/pic4.jpg",
        sections: []
      },
      {
        id: 2,
        name: "30-Day Bodyweight Challenge",
        level: "Intermediate",
        price: 19.99,
        category: "Mindset",
        description: "Transform your body in just 30 days with this challenging program.",
        durationPerDay: 45,
        options: ["Daily Coaching Calls", "Online Community"],
        equipments: [],
        picture: "../../assets/images/programs/pic1.jpg",
        sections: []
      },
      {
        id: 3,
        name: "Beginner Nutrition Course",
        level: "Beginner",
        price: 49.99,
        category: "Nutrition",
        description: "Learn to play the guitar from scratch with this comprehensive course.",
        durationPerDay: 60,
        options: ["Sheet Music", "Practice Tracks"],
        equipments: ["Acoustic Guitar"],
        picture: "../../assets/images/programs/pic2.jpg",
        sections: []
      },
      {
        name: "Fitness For Beginners",
        level: "Beginner",
        price: 0,
        category: "Fitness",
        description: "Learn the fundamentals of digital marketing with this free introductory course.",
        durationPerDay: 15,
        options: [],
        equipments: [],
        picture: "../../assets/images/programs/pic3.jpg",
        sections: []
      },
      {
        id: 4,
        name: "Intermediate Spanish Conversation",
        level: "Intermediate",
        price: 39.99,
        category: "Mindset",
        description: "Improve your conversational Spanish with this engaging intermediate-level course.",
        durationPerDay: 30,
        options: ["Weekly Video Calls", "Interactive Exercises"],
        equipments: [],
        picture: "../../assets/images/programs/pic1.jpg",
        sections: []
      }






    ]
  }
  ngOnInit() {
  }
}
