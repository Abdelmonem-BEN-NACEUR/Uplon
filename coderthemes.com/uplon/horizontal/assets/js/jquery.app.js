/**
* Template Name: Uplon bootstrap 4 Admin Template
* Author: Coderthemes
* Module/App: Main Js
*/


!function(n){"use strict";var t=function(){};t.prototype.init=function(){n(".navbar-toggle").on("click",function(t){n(this).toggleClass("open"),n("#navigation").slideToggle(400)}),n(".navigation-menu>li").slice(-1).addClass("last-elements"),n('.navigation-menu li.has-submenu a[href="#"]').on("click",function(t){n(window).width()<992&&(t.preventDefault(),n(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open"))}),n(".right-bar-toggle").click(function(){n(".right-bar").toggle(),n(".wrapper").toggleClass("right-bar-enabled")})},n.Navbar=new t,n.Navbar.Constructor=t}(window.jQuery),function(n){"use strict";window.jQuery.Navbar.init()}(),$(document).ready(function(){$(".navigation-menu a").each(function(){var n=window.location.href.split(/[?#]/)[0];this.href==n&&($(this).parent().addClass("active"),$(this).parent().parent().parent().addClass("active"),$(this).parent().parent().parent().parent().parent().addClass("active"))})});
