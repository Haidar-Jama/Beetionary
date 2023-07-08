const menu_btn =document.querySelector(".hamburger")
const mobileNav =document.querySelector(".mobile-nav")
const  mode =document.querySelector("#mode")
// const  mainLogo =document.querySelector(".mainLogo")
// const  darkLogo =document.querySelector(".darkLogo")







menu_btn.addEventListener ('click', function(){
     
   menu_btn.classList.toggle('is-active');
   mobileNav.classList.toggle('is-active');
   
})

// mode.addEventListener ('click', function(){
//    document.body.classList.toggle('darkMode');
//    if(document.body.classList.toggle('darkMode')){
//       
//    } 
// })

mode.onclick =function( ){
     
     document.body.classList.toggle("darkMode");
     
     if(document.body.classList.contains("darkMode")){
          mode.src="Image/sun.png";
          

     } else {
          mode.src="Image/moon.png"; }
          
     
}



