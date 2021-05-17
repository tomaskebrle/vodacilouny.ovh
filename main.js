var scrollVal = 100;
$(window).scroll(function(){
  var x = $(this).scrollTop();
  if(x > scrollVal){
    $("header").addClass("sticky");
    console.log("sticky")
  }else{
    $("header").removeClass("sticky")
  }
  
})