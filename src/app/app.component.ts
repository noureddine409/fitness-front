import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import * as $ from 'jquery';
declare global {
  interface JQuery {
    owlCarousel(options?: any): any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {


  constructor(private elRef: ElementRef){

  }

  ngOnInit(){

  }

  observer!: MutationObserver;

  ngAfterViewInit(){
    this.observer = new MutationObserver(mutations => {

      console.log('Dom change detected...');

      var checkSelectorExistence = function(selectorName: any) {
        if(jQuery(selectorName).length > 0){return true;}else{return false;}
      };

      var searchBar = function() {
        jQuery("#quik-search-btn").on('click',function() {jQuery('.nav-search-bar').fadeIn(500).addClass('On');});
        jQuery("#search-remove").on('click',function() {jQuery('.nav-search-bar').fadeOut(500).removeClass('On');});
      }

      var setCourseCarousel = function() {
        if(!checkSelectorExistence('.courses-carousel')){return;}
        jQuery('.courses-carousel').owlCarousel({
          loop:true,
          autoplay:true,
          margin:0,
          nav:true,
          dots: false,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive:{
            0:{
              items:1
            },
            480:{
              items:2
            },
            1024:{
              items:3
            },
            1200:{
              items:4
            }
          }
        });
      };

      var managePlaceholderStyle = function()
      {
        if(!checkSelectorExistence('.placeani')){return;}
        $('.placeani input, .placeani textarea').focus(function(){
          $(this).parents('.form-group').addClass('focused');
        });

        $('.placeani input, .placeani textarea').blur(function(){
          var inputValue = $(this).val();
          if ( inputValue == "" ) {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
          } else {
            $(this).addClass('filled');
          }
        });
      }

      var setTestimonialCarousel = function() {
        if(!checkSelectorExistence('.testimonial-carousel')){return;}
        jQuery('.testimonial-carousel').owlCarousel({
          loop:true,
          autoplay:true,
          margin:30,
          nav:true,
          dots:true,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive:{
            0:{
              items:1
            },
            480:{
              items:1
            },
            1024:{
              items:2
            },
            1200:{
              items:2
            }
          }
        });

      }

      // Call the setCourseCarousel function to execute the jQuery code automatically
      setCourseCarousel();
      setTestimonialCarousel();
      managePlaceholderStyle();
      searchBar();
    });
    var config = { attributes: true, childList: true, characterData: true };

    this.observer.observe(this.elRef.nativeElement, config);
  }
}
