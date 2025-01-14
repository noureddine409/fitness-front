import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  constructor(private router: Router) {
  }
  shouldShowHeaderAndFooter(): boolean {
    const excludedRoutes = ['/dashboard/admin'];
    const currentRoute = this.router.url.split('?')[0];
    return !excludedRoutes.some(route => currentRoute.startsWith(route));
  }

  ngOnInit() {
    // @ts-ignore
    var checkSelectorExistence = function(selectorName) {
      if(jQuery(selectorName).length > 0){return true;}else{return false;}
    };

    var setCountDown = function(){
      if(!checkSelectorExistence('.countdown')){return;}
      // @ts-ignore
      var currentDate: string = new Date();
      var months = ["January", "February",
        "March", "April",
        "May", "June",
        "July", "August",
        "September", "October",
        "November", "December"];
      // @ts-ignore
      currentDate.setDate(currentDate.getDate() + 10);
      // @ts-ignore
      currentDate =  currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();
      /*You can use this format : 01 January 2019 */
      // @ts-ignore
      $('.countdown').countdown({date: currentDate+' 23:5'});
    }

    setCountDown();
  }


  ngAfterViewInit(): void {

    // @ts-ignore
    var checkSelectorExistence = function(selectorName) {
      if(jQuery(selectorName).length > 0){return true;}else{return false;}
    };

    var setCounterUp = function(){
      /* change counter to counter-up*/
      if(!checkSelectorExistence('.counter')){return;}
      // @ts-ignore
      jQuery('.counter').counterUp({
        delay: 10,
        time: 3000
      });
    }

    var searchToggle = function() {
      $(".ttr-search-toggle").on("click", function(e) {
        e.preventDefault();
        $(".ttr-search-bar").toggleClass("active");
      })
    };

    var closeNav = function() {
      $(".ttr-overlay, .ttr-sidebar-toggle-button").on("click", function() {
        $("body").removeClass("ttr-opened-sidebar"), $("body").removeClass("ttr-body-fixed");
      })
    };

    var leftSidebar = function() {

      $(".ttr-toggle-sidebar").on("click", function() {
        if($("body").hasClass("ttr-opened-sidebar")){
          $("body").removeClass("ttr-opened-sidebar"), $("body").removeClass("ttr-body-fixed");
        }else{

          // @ts-ignore
          $(window).width() < 760 && $("body").addClass("ttr-body-fixed"), $("body").addClass("ttr-opened-sidebar");
        }
      });

      $(".ttr-sidebar-pin-button").on("click", function() {
        $("body").toggleClass("ttr-pinned-sidebar");
      });

      $(".ttr-sidebar-navi li.show > ul").slideDown(200);
      $(".ttr-sidebar-navi a").on("click", function(e) {
        var a = $(this);
        $(this).next().is("ul") ? (e.preventDefault(), a.parent().hasClass("show") ? (a.parent().removeClass("show"), a.next().slideUp(200)) : (a.parent().parent().find(".show ul").slideUp(200), a.parent().parent().find("li").removeClass("show"), a.parent().toggleClass("show"), a.next().slideToggle(200))) : (a.parent().parent().find(".show ul").slideUp(200), a.parent().parent().find("li").removeClass("show"), a.parent().addClass("show"))
      });

    };

    // @ts-ignore
    var waveEffect = function(e, a) {
      var s = ".ttr-wave-effect",
        n = e.outerWidth(),
        t = a.offsetX,
        i = a.offsetY;
      e.prepend('<span class="ttr-wave-effect"></span>'), $(s).css({
        top: i,
        left: t
      }).animate({
        opacity: "0",
        width: 2 * n,
        height: 2 * n
      }, 500, function() {
        e.find(s).remove()
      });
    };

    var materialButton = function() {
      $(".ttr-material-button").on("click", function(e) {
        waveEffect($(this), e)
      });
    }

    var headerSubMenu = function() {
      $(".ttr-header-submenu").show();
      $(".ttr-header-submenu").parent().find("a:first").on("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).parents(".ttr-header-navigation").find(".ttr-header-submenu").not($(this).parents("li").find(".ttr-header-submenu")).removeClass("active");
        $(this).parents("li").find(".ttr-header-submenu").show().toggleClass("active");
      });
      $(document).on("click", function(e) {
        var a = $(e.target);
        !0 === $(".ttr-header-submenu").hasClass("active") && !a.hasClass("ttr-submenu-toggle") && a.parents(".ttr-header-submenu").length < 1 && $(".ttr-header-submenu").removeClass("active"), a.parents(".ttr-search-bar").length < 1 && !a.hasClass("ttr-search-bar") && !a.parent().hasClass("ttr-search-toggle") && !a.hasClass("ttr-search-toggle") && $(".ttr-search-bar").removeClass("active")
      });
    }

    searchToggle();
    closeNav();
    leftSidebar();
    materialButton();
    headerSubMenu();
    setCounterUp();
  }



}
