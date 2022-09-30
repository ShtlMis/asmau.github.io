/* for header */
let navbar= document.queryselector(".nav")
var elements=documents.getElementByClassName("column")
{
var i;
function logo() {
for (i=0; i<elements.lenght; i++)
{
  elements[i].style.float="left"
}
}
function phone() { 
for (i=0; i<elements.length; i++) 
{
  elements[i].style.float="right"; 
}
                }
function planlist() 
{ 
document.getElementById("dropdown1").classlist.toggle("show");
}
function resourcelist() 
{
document.getElementById("dropdown2").classlist.toggle("show");
}
function INDIVIDUAL() {
window.location.replace("healthcare-plans/individualplan.html");
}
function FAMILY() {
window.location.replace("healthcare-plans/familyplan.html");
}
function CORPORATE() {
window.location.replace("healthcare-plans/corporateplan.html");
}
function CUSTOMIZED() {
window.location.replace("healthcare-plans/customizedplan.html");
}
function ENROLLMENT() {
window.location.replace("resources/enrollment.html");
}
function DOWNLOADS() {
window.location.replace("resources/downloads.html");
}
function FAQs() {
window.location.replace("resources/faqs.html");
}
function CAREERS() {
window.location.replace("career.html");
}
window.onclick = function(event)
{
    if (!event.target.matches('.menu-btn'))
    {
        var dropdowns = document.getElementByClassName("menu-content");
        var i;
    for (i=0; i<dropdowns.length; i++) 
    {
        var opendropdown = dropdowns[i];
    if (opendropdown.classlist.contains('show'))
            {
                opendropdown.classlist.remove('show');
            }
        }
    }
}
}

/* for homepage slideshow section */
let slideIndex=1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex +=n);
}
function currentSlide(n) {
    showSlides(slideIndex =n);
}
function showSlides(n) {
    let j;
    let slides=documents.getElementByClassName("myslides");
    let dots=documents.getElementByClassName("dots");
    if (n>slides.length)
      {
          slideIndex = 1
      }
    if (n<1)
    {
        slideIndex = slides.length
    }
    for (j=o; j<slides.length; j++)
    {
        slides[j].style.display = "none";
    }
    for (j=0; j<dots.length; j++)
    {
        slides[j].className = dots[j].className.replace("active", "");
    }
    slides[slideIndex-1].style.display="block";
    dotd[slideIndex-1].className +="active";
}


/*  validation for contact form */
function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Please enter a valid name";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}

