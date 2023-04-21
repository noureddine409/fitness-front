import {Component} from '@angular/core';
import {AppUser} from "../@core/models/user.model";

@Component({
  selector: 'app-our-trainers',
  templateUrl: './our-trainers.component.html',
  styleUrls: ['./our-trainers.component.css']
})
export class OurTrainersComponent {
  trainers: AppUser[] = [];
  user1: AppUser = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: "mysecretpassword",
    birthDay: "1990-05-14",
    profilePicture: "../../assets/images/blog/default/thum1.jpg",
    bio: "I am a certified personal trainer with 5 years of experience.",
    gender: "MALE",
    profileCompleted: true,
    socialMedia: {
      facebook: "https://www.facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe/"
    },
    roles: [
      {name: "Trainer"}
    ]
  };

  user2: AppUser = {
    firstName: "Sarah",
    lastName: "Smith",
    email: "sarahsmith@example.com",
    password: "mysecretpassword",
    birthDay: "1985-10-22",
    profilePicture: "../../assets/images/blog/default/thum2.jpg",
    bio: "I specialize in strength training and have helped hundreds of clients reach their fitness goals.",
    gender: "FEMALE",
    profileCompleted: true,
    socialMedia: {
      facebook: "https://www.facebook.com/sarahsmith",
      twitter: "https://twitter.com/sarahsmith",
      instagram: "https://www.instagram.com/sarahsmith/"
    },
    roles: [
      {name: "Trainer"}
    ]
  };

  user3: AppUser = {
    firstName: "Mike",
    lastName: "Johnson",
    email: "mikejohnson@example.com",
    password: "mysecretpassword",
    birthDay: "1995-02-07",
    profilePicture: "../../assets/images/blog/default/thum3.jpg",
    bio: "I am a certified nutritionist and personal trainer with a passion for helping people lead healthier lives.",
    gender: "MALE",
    profileCompleted: true,
    socialMedia: {
      facebook: "https://www.facebook.com/mikejohnson",
      twitter: "https://twitter.com/mikejohnson",
      instagram: "https://www.instagram.com/mikejohnson/"
    },
    roles: [
      {name: "Trainer"}
    ]
  };

  constructor() {
    this.trainers = [
      this.user1, this.user2, this.user3
    ]
  }

}
