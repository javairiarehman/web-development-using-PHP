


function showSlides() {
var i,j;
for(i=1; i <=5; i++)
{
    for (j=1; j<=i; j++)
     {
    document.write("*"); 
      }
 
 document.write("<br/>");    
}
}


function ValidateRows() {
  var row = document.getElementById("txtName1").value;

      
      let string = "";
      for (let i = 1; i <= row; i++) {
        for (let j = 0; j < i; j++) {
          string += "*";
          //if u want to print itscreem
         // document.write("*"); 
        }
        string += "\n";
       
        //if u want to print on screen
        //document.write("<br/>");
      }
      console.log(string);
      
 
}



function ValidateNumber() {
  var email = document.getElementById("txtName").value;
  var lblError = document.getElementById("lblError1");
  
  lblError.innerHTML = "";
  
      if(email % 2  == 0){
        lblError.innerHTML = "number is even";
      }
      else{
          lblError.innerHTML = "number is odd";
      }
 
}


var slideIndex = 1
showSlides(slideIndex)

var slideIndex = 0
showSlides()

function showSlides() {
  var i
  var slides = document.getElementsByClassName('mySlides')
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = 'block'
  setTimeout(showSlides, 3000)
}
