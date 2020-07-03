function toggleActive() {
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");

  one.addEventListener("click", active);
  two.addEventListener("click", active);
  three.addEventListener("click", active);
  four.addEventListener("click", active);
  
  var over = document.querySelector('.active');
  console.log(over);

  function active() {
    console.log(this);
    if (this.className === 'navLink') {
      one.className = 'navLink';
      two.className = 'navLink';
      three.className = 'navLink';
      four.className = 'navLink';
      this.className = 'navLink active';

    }
    // Background for whole nav
    var navbar = document.getElementById("navbar");
    if (one.className === 'navLink active') {
      navbar.style.backgroundColor = "midnightblue";
    } else if (two.className === 'navLink active') {
      navbar.style.backgroundColor = "#4e84b5";
    } else if (three.className === 'navLink active') {
      navbar.style.backgroundColor = "#9abad6";
    } else if (four.className === 'navLink active') {
      navbar.style.backgroundColor = "#c1d5e6";
    } else {
      navbar.style.backgroundColor = "midnightblue";
    }
  // style class active
  var over = document.querySelector('.active');
      one.style.backgroundImage = "none";
      one.style.backgroundColor = " transparent";
      two.style.backgroundImage = "none";
      two.style.backgroundColor = " transparent";
      three.style.backgroundImage = "none";
      three.style.backgroundColor = " transparent";
      four.style.backgroundImage = "none";
      four.style.backgroundColor = " transparent";

      over.style.backgroundImage = "repeating-linear-gradient(45deg, #4682b4, transparent 110px)";
      over.style.backgroundColor = "rgba(255, 255, 255, 0.55)";
  }

  // Add image 
  var imageBox = document.getElementById("newImageContainer");
  var newImage = document.createElement("IMG");
  newImage.src = "pics/1.jpg";
  newImage.className = "myImage";
  imageBox.appendChild(newImage);
  console.log(newImage);
  var image = document.querySelector('.myImage')
  image.style.width = "300px";

}
// Call function
toggleActive()
//////////////////////////////////////////////////////////////////////
// Email test


function checkEmail(emailId) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)){
   return true;
  }    
  alert("Email invalid");
  return false;
}

// Form validation

function validateForm() {
  // First Name
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    document.myForm.fname.focus();
    return false;
  }
  // Last Name
  if (document.forms["myForm"]["lname"].value == "") {
    alert("Surname must be filled out");
    document.myForm.lname.focus();
    return false;
  }
  // Email
  if (document.forms["myForm"]["email"].value == "") {
    alert("Email must be filled out");
    document.myForm.lname.focus();
    return false;
  } else {
    checkEmail(document.forms["myForm"]["email"].value);
  }
}
//////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////
// Button hover effect

 function mouseDownLeft() {
  document.getElementById("left").style.transform = "scale(1.2, 1.2)";
}
 function mouseUpLeft() {
  document.getElementById("left").style.transform = "scale(1.0, 1.0)";
} 

function mouseDownRight() {
  document.getElementById("right").style.transform = "scale(1.2, 1.2)";
}
 function mouseUpRight() {
  document.getElementById("right").style.transform = "scale(1.0, 1.0)";
}

function mouseDownOne() {
  document.getElementById("slideOneBtn").style.transform = "scale(1.2, 1.2)";
}
 function mouseUpOne() {
  document.getElementById("slideOneBtn").style.transform = "scale(1.0, 1.0)";
}

function mouseDownTwo() {
  document.getElementById("slideTwoBtn").style.transform = "scale(1.2, 1.2)";
}
 function mouseUpTwo() {
  document.getElementById("slideTwoBtn").style.transform = "scale(1.0, 1.0)";
}

function mouseDownThree() {
  document.getElementById("slideThreeBtn").style.transform = "scale(1.2, 1.2)";
}
 function mouseUpThree() {
  document.getElementById("slideThreeBtn").style.transform = "scale(1.0, 1.0)";
}
//////////////////////////////////////////////////////////////
// Slider


var slideOne = document.getElementById("slideOne");
var slideTwo = document.getElementById("slideTwo");
var slideThree = document.getElementById("slideThree");
  slideOne.style.display = "block";

function slideOneBtn() {
  slideOne.style.display = "block";
  slideTwo.style.display = "none";
  slideThree.style.display = "none";
}
function slideTwoBtn() {
  slideOne.style.display = "none";
  slideTwo.style.display = "block";
  slideThree.style.display = "none";
}
function slideThreeBtn() {
  slideOne.style.display = "none";
  slideTwo.style.display = "none";
  slideThree.style.display = "block";
}

function left() {
    // Slide show ultimate
    if (  slideOne.style.display == "block") {
      slideOne.style.display = "none";
      slideTwo.style.display = "block";
      slideThree.style.display = "none";
    } else if (slideTwo.style.display == "block") {
        slideOne.style.display = "none";
        slideTwo.style.display = "none";
        slideThree.style.display = "block";
    } else if (slideThree.style.display == "block") {
        slideOne.style.display = "block";
        slideTwo.style.display = "none";
        slideThree.style.display = "none";
    }
}
function right() {
    // Slide show ultimate
    if ( slideOne.style.display == "block") {
        slideOne.style.display = "none";
        slideTwo.style.display = "none";
        slideThree.style.display = "block";
    } else if (slideTwo.style.display == "block") {
        slideOne.style.display = "block";
        slideTwo.style.display = "none";
        slideThree.style.display = "none";
    } else if (slideThree.style.display == "block") {
      slideOne.style.display = "none";
      slideTwo.style.display = "block";
      slideThree.style.display = "none";
    }
}



