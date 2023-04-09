import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
  myData = [
    { id: 1, name: 'FITNESS' ,page:"./assets/images/pic1.jpg"},
    { id: 2, name: 'NUTRITION',page:"./assets/images/pic2.jpg" },
    { id: 3, name: 'MINDSET',page:"./assets/images/pic3.jpg" }
  ];

}
