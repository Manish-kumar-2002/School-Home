// $(window).on("load", function () {
$(document).ready(function() {
  $(".hamburger").on("click", function () {
    $(".navbar").slideToggle();
  });
  $(".gallery-bar").on("click", function () {
    $(".gallery-wrap").toggleClass("open")
    $(".gallery-bar").toggleClass("close")
    $('.main-bg').toggleClass("active")
  });
  $(".main-serach").on("click",function(){
    $(".search-input-wrap").toggleClass("active");
  })
  $(".close-search").on("click",function(){
    $(".search-input-wrap").removeClass("active");
  })
  $(".right-arrows").click(function(){
    $(this).toggleClass("rotate");
    $(this).closest('a').next('.submenu').slideToggle();
  })
});
