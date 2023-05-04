var sliderTriggers = document.getElementsByClassName("slider-trigger");
var slider = document.getElementsByClassName('slider-parent')[0];

for (var i = 0; i < sliderTriggers.length; i++) {
    sliderTriggers[i].addEventListener("click", function(el) {
        if (slider.classList.contains("active")) {
            slider.classList.remove("active");
        } else {
            slider.classList.add("active");
        }
    });
}

// var mini = true;

// function toggleSidebar() {
//   if (mini) {
//     console.log("opening sidebar");
//     document.getElementById("mySidebar").style.width = "90%";
//     document.getElementById("main").style.marginLeft = "90%";
//     this.mini = false;
//   } else {
//     console.log("closing sidebar");
//     document.getElementById("mySidebar").style.width = "200px";
//     document.getElementById("main").style.marginLeft = "85px";
//     this.mini = true;
//   }
// }

// var mini1 = true;

// function toggleSidebar1() {
//     if (mini1) {
//       console.log("opening sidebar1");
//       document.getElementById("mySidebar1").style.width = "90%";
//       document.getElementById("main").style.marginLeft = "90%";
//       this.mini1 = false;
//     } else {
//       console.log("closing sidebar1");
//       document.getElementById("mySidebar1").style.width = "150px";
//       document.getElementById("main").style.marginLeft = "85px";
//       this.mini1 = true;
//     }
//   }


//   var mini2 = true;

// function toggleSidebar2() {
//     if (mini2) {
//       console.log("opening sidebar2");
//       document.getElementById("mySidebar2").style.width = "90%";
//       document.getElementById("main").style.marginLeft = "90%";
//       this.mini2 = false;
//     } else {
//       console.log("closing sidebar2");
//       document.getElementById("mySidebar2").style.width = "85px";
//       document.getElementById("main").style.marginLeft = "85px";
//       this.mini2 = true;
//     }
//   }