const toTop = document.querySelector("#arrowUp");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})



// $(document).ready(function(){

//     $(window).scroll(function(){
//         if((this).scrollTop() > 40){
//          $('#arrowUp').fadeIn();
//         } else{
//          $('#arrowUp').fadeOut();
//         }
//     });

//     $("#arrowUp").click(function(){
//         $('html ,body').animate({scrollTop : 0},800);
//     });
// });
