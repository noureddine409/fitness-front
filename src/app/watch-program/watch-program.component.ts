import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-watch-program',
  templateUrl: './watch-program.component.html',
  styleUrls: ['./watch-program.component.css']
})
export class WatchProgramComponent implements OnInit {

  ngOnInit(): void {

}
changeUrl(videoUrl: string,id:string) {
  const acodHead = document.querySelector(id);
  const videoLink = document.querySelector('.video-bx a') as HTMLAnchorElement;

  acodHead!.addEventListener('click', () => {
    videoLink.href = videoUrl;
    console.log(videoLink.href);
  });

  const videoPopup = document.querySelector('.popup-youtube') as HTMLAnchorElement;
  const videoLinkClick = document.querySelector('#video-link');

  videoLinkClick?.addEventListener('click', () => {
    videoPopup?.click();
  });
}
}
