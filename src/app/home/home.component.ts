import {Component, OnInit} from '@angular/core';
import {ServiceItemModel} from "../@core/models/service-item.model";
import {ProgramDto} from "../@core/models/program.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  serviceItems!: ServiceItemModel[];
  programs!: ProgramDto[];
  constructor() {
    //Fake data for testing
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
    this.serviceItems = [
      {
        id: 1,
        name: 'FITNESS',
        picture: "./assets/images/pic1.jpg",
        image:"../../assets/images/our-services/pic1.jpg",
        title: 'let\'s make fitness fun',
        description: 'Fitness is not just about looking good, it’s about feeling good too! And the best part? You don’t have to be perfect to feel the benefits. Every step you take towards a healthier lifestyle is a step in the right direction. So don’t worry if you stumble along the way, we’re here to support and encourage you. Together, we’ll celebrate every small victory and keep pushing towards our goals. Are you ready to join us on this amazing journey? Let’s go!'
      },
      {
        id: 2,
        name: 'NUTRITION',
        picture: "./assets/images/pic2.jpg",
        image:"../../assets/images/our-services/pic2.jpg",
        title: 'love every bit of your food',
        description: 'Nutrition is the fuel that powers our bodies and minds. Eating a balanced diet full of whole foods, fruits, and vegetables can help us feel our best and perform at our highest level. But let’s be real, eating healthy isn’t always easy. That’s why we’re here to support and guide you. Together, we’ll learn about the power of nutrition and how to make healthy choices that fit your lifestyle. Are you ready to join us on this journey towards better health and wellness? Let’s do this!'
      },
      {
        id: 3,
        name: 'MINDSET',
        picture: "./assets/images/pic3.jpg",
        image:"../../assets/images/our-services/pic3.jpg",
        title: 'make your mind strong too',
        description: 'Your mindset is everything! It’s the foundation of your success and happiness. A positive mindset can help you overcome challenges, achieve your goals, and live a fulfilling life. But it’s not always easy to maintain a positive mindset, especially when life gets tough. That’s why we’re here to support and encourage you. Together, we’ll work on developing a growth mindset, one that embraces challenges and sees failures as opportunities to learn and grow. Are you ready to join us on this journey towards a stronger mindset? Let’s do this!'
      }
    ];
  }




}
