//activate airtable object
var Airtable = require("airtable");
var base = new Airtable(
  {apiKey: "keycrorLCSvJTFGBB"})
  .base("appOVeJVrznZzDkt0");

let container = document.querySelector(".container");
let dateType = document.querySelector("main").dataset.date;

base("vinyl").select({
    // Selecting the first 5 records in Grid view:
    maxRecords: 60,
    view: "Grid view",
  })


.eachPage(
function page(records, fetchNextPage){
      records.forEach(
        function (record) {
        // pull my airtable data
        // each record will have its own data

        let airtableItem = document.createElement("div");
        // // add some data specific meta to my new divs for filtering
        airtableItem.classList.add("airtable-item");
        airtableItem.setAttribute("data-label", record.fields.Label);
        airtableItem.setAttribute("data-year", record.fields.year);

        

        // Create aimg tag for my album art
        let albumCover = document.createElement("img");
        albumCover.src = record.fields.Attachments[0].url;
        albumCover.classList.add("airtable-image");
        // create a span for my artist name


        // appending to div holding each airtable record
        let recordYear = document.createElement("span");
        recordYear.innerHTML = record.fields.year;

        airtableItem.append(albumCover);
        
        airtableItem.append(recordYear);
        // append div to body
         
        // document.body.append(airtableItem);
        container.append(airtableItem);
       


      let popUp = document.createElement("div");
      popUp.classList.add("pop-up");
      airtableItem.append(popUp);


      var closeBtn = document.getElementsByClassName("close")[0];

      let popUpContent = document.createElement("div");
      popUpContent.classList.add("pop-up-content");
      popUp.append(popUpContent);
      popUp.append(closeBtn);
 
      let popUpImage = document.createElement("img");
      popUpImage.src = record.fields.Attachments[0].url;
      popUpImage.classList.add("pop-up-image");
      popUpContent.append(popUpImage);

      let popUpYear = document.createElement("div");
        popUpYear.innerHTML = record.fields.year;
      let popUpLabel = document.createElement("span");
        popUpLabel.innerHTML = record.fields.Label;
      let popUpGenre = document.createElement("span");
        popUpGenre.innerHTML = record.fields.Genre;
      let popUpArtist = document.createElement("span");
        popUpArtist.innerHTML = record.fields.Artist;
      let popUpMood = document.createElement("span");
        popUpMood.innerHTML = record.fields.Mood;

        popUpContent.append(popUpYear);
        popUpContent.append(popUpLabel);
        popUpContent.append(popUpGenre);
        popUpContent.append(popUpArtist);
        popUpContent.append(popUpMood);



      albumCover.onclick = function(){
      popUp.style.display = "block";
      popUp.src = this.src;
      }

      closeBtn.onclick = function() { 
      popUp.style.display = "none";
} 


// let buttonGroup = document.querySelector(".button-group");
// let buttonTitleLabel = document.createElement("button-title-label");
// buttonTitleLabel.innerHTML = "Labelsss";
// let buttonLabel = document.querySelector(".button-label");
// buttonTitleLabel.append(buttonLabel);

// buttonTitleLabel.addEventListener('click', () => {
//   buttonLabel.classList.toggle('hidden');
// });



let allAirtableItems = document.querySelectorAll(".airtable-item");
allAirtableItems.forEach(function(item) {
  if (item.getAttribute("data-year") != "70s") {
    item.style.display = "none";
  }
});

 }
 )
});



// let buttonGroup = document.querySelector(".button-group")
// let buttonTitleLabel = document.createElement("button-title-label")
// buttonTitleLabel.innerHTML = "Labelsss";
// buttonGroup.append(buttonTitleLabel);
// let buttonLabel = document.querySelector(".button-label")
// buttonTitleLabel.append(buttonLabel)


// function toggleButtonGroup() {
//   buttonGroup.classList.toggle("hidden");
// }

// // add event listener to the big div to toggle the container
// buttonTitleLabel.addEventListener("click", toggleButtonGroup);

// // append the container to the big div
// buttonLabel.append(buttonGroup);

// // append the big div to the document body
// document.body.append(buttonLabel);



//   }
//   )
// }
// );


    


document.querySelectorAll(".btn-label").forEach((btn) => {
  btn.addEventListener("click", function(event){ShowHideFilter(event)});
})

document.querySelectorAll(".btn-all").forEach((showAllBtn) => {
showAllBtn.addEventListener("click", function(event){ShowAll(event)});
})

function ShowHideFilter(e) {
  console.log(e.target.dataset.label)
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  listofAirtableItems.forEach(function SearchFilter(item) {
    item.classList.remove("filter-hide");
    if (item.dataset.label == e.target.dataset.label) {
      item.classList.add("filter-show");
    } else {
      item.classList.add("filter-hide");
    }
  });
  
}






function ShowAll(e) {
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  listofAirtableItems.forEach( function ShowAllRecords(item){
    item.classList.remove("filter-hide");
    item.classList.add("filter-show");
  })
}

















