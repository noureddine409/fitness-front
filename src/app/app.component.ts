import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const scripts = [
      "assets/js/jquery.min.js",
      "assets/vendors/bootstrap/js/popper.min.js",
      "assets/vendors/bootstrap/js/bootstrap.min.js",
      "assets/vendors/bootstrap-select/bootstrap-select.min.js",
      "assets/vendors/bootstrap-touchspin/jquery.bootstrap-touchspin.js",
      "assets/vendors/magnific-popup/magnific-popup.js",
      "assets/vendors/counter/waypoints-min.js",
      "assets/vendors/counter/counterup.min.js",
      "assets/vendors/imagesloaded/imagesloaded.js",
      "assets/vendors/masonry/masonry.js",
      "assets/vendors/masonry/filter.js",
      "assets/vendors/owl-carousel/owl.carousel.js",
      "assets/js/functions.js",
      "assets/js/contact.js",
      "assets/vendors/revolution/js/jquery.themepunch.tools.min.js",
      "assets/vendors/revolution/js/jquery.themepunch.revolution.min.js",
      "assets/vendors/revolution/js/extensions/revolution.extension.actions.min.js",
      "assets/vendors/revolution/js/extensions/revolution.extension.carousel.min.js",
      "assets/vendors/revolution/js/extensions/revolution.extension.kenburn.min.js",
      "assets/vendors/revolution/js/extensions/revolution.extension.layeranimation.min.js",
      "assets/vendors/revolution/js/extensions/revolution.extension.migration.min.js",
      "assets/vendors/revolution/js/extensions/revolution.extension.navigation.min.js",
      "assets/vendors/revolution/js/extensions/revolution.extension.parallax.min.js",
      "assets/vendors/revolution/js/extensions/revolution.extension.slideanims.min.js",
      "assets/vendors/revolution/js/extensions/revolution.extension.video.min.js"
    ];


    for (const scriptUrl of scripts) {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      document.head.appendChild(script);
    }
  }

}
