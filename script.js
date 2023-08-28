function toggleFixed() {
  car parentWidth = $(".parent").width();
  $(".child").toggleClass("fixed").width(parentWidth);
  
}

