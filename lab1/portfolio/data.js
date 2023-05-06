// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


// function interaction(evt, work) {
//     // Declare all variables
//     var i, info, links;
  
//     // Get all elements with class="tabcontent" and hide them
//     info = document.getElementsByClassName("info");
//     for (i = 0; i < info.length; i++) {
//       info[i].style.display = "none";
//     }
  
//     // Get all elements with class="tablinks" and remove the class "active"
//     links = document.getElementsByClassName("tablinks");
//     for (i = 0; i < links.length; i++) {
//       links[i].className = links[i].className.replace(" active", "");
//     }
  
//     // Show the current tab, and add an "active" class to the link that opened the tab
//     document.getElementById(work).style.display = "block";
//     evt.currentTarget.className += " active";


//   }




function openPage1(pageName1, elmnt1, color1) {
    // Hide all elements with class="tabcontent" by default */
    var i, info, link;
    info = document.getElementsByClassName("info");
    for (i = 0; i < info.length; i++) {
      info[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    link = document.getElementsByClassName("link");
    for (i = 0; i < link.length; i++) {
      link[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName1).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt1.style.backgroundColor = color1;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen1").click();





function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();






//   var popUp = document.getElementById("popUp");

// // Get the button that opens the modal
// var btn = document.getElementById("title");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   popUp.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   popUp.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == popUp) {
//     popUp.style.display = "none";
//   }
// }


let popUps = document.getElementsByClassName("popUp");
let titles = document.getElementsByClassName("title");
  let span = document.getElementsByClassName("close")[0];

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener("click", function() {
    let popUp = this.nextElementSibling;
    popUp.style.display = "block";
  });
}

for (let i = 0; i < popUps.length; i++) {
  let span = popUps[i].getElementsByClassName("close")[0];
  span.addEventListener("click", function() {
    this.parentElement.style.display = "none";
  });



  window.addEventListener("click", function(event) {
    if (event.target == popUps[i]) {
      popUps[i].style.display = "none";
    }
  });
}