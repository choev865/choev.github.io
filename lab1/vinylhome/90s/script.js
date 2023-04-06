//activate airtable object
var Airtable = require("airtable");
var base = new Airtable(
  {apiKey: "keycrorLCSvJTFGBB"})
  .base("appOVeJVrznZzDkt0");

let container = document.querySelector(".container");
let airtableItemGroup = document.querySelector(".airtable-item-group");

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
        airtableItem.setAttribute("data-genre", record.fields.Genre);
        airtableItem.setAttribute("data-mood", record.fields.Mood);


        

        // Create aimg tag for my album art
        let albumCover = document.createElement("img");
        albumCover.src = record.fields.Attachments[0].url;
        albumCover.classList.add("airtable-image");
        // create a span for my artist name



        // appending to div holding each airtable record
        let recordYear = document.createElement("span");

        airtableItem.append(albumCover);
        airtableItem.append(recordYear);
        airtableItemGroup.append(airtableItem);
        container.append(airtableItemGroup)


        let popUp = document.createElement ("div");
        popUp.classList.add("pop-up");
        airtableItem.append(popUp);


      let popUpContent = document.createElement("div");
      popUpContent.classList.add("pop-up-content");
      popUp.append(popUpContent);
      
 
      

      // let popUpYear = document.createElement("div");
      //         popUpYear.classList.add("pop-up-year");
      //   popUpYear.innerHTML = record.fields.year;
      let popUpTitle = document.createElement("div");
              popUpTitle.classList.add("pop-up-title");
        popUpTitle.innerHTML = record.fields.Title;
      let popUpArtist = document.createElement("div");
              popUpArtist.classList.add("pop-up-artist");
        popUpArtist.innerHTML = record.fields.Artist;
     let popUpImage = document.createElement("img");
           popUpImage.src = record.fields.Attachments[0].url;
           popUpImage.classList.add("'pop-up-image'");
      let popUpLabel = document.createElement("div");
              popUpLabel.classList.add("pop-up-label");
        popUpLabel.innerHTML = record.fields.Label;
      let popUpGenre = document.createElement("div");
              popUpGenre.classList.add("pop-up-genre");
        popUpGenre.innerHTML = record.fields.Genre;
      let popUpMood = document.createElement("div");
              popUpMood.classList.add("pop-up-mood");
        popUpMood.innerHTML = record.fields.Mood;


        // popUpContent.append(popUpYear);
        popUpContent.append(popUpTitle)
        popUpContent.append(popUpArtist);
        popUpContent.append(popUpImage);
        popUpContent.append(popUpLabel);
        popUpContent.append(popUpGenre);
        popUpContent.append(popUpMood);



let closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times;";
closeBtn.classList.add("close");
popUp.appendChild(closeBtn);


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
        if (item.getAttribute("data-year") != "90s") {
          item.style.display = "none";
        }
      });


  }
  )
}
);







// document.querySelectorAll(".btn-label").forEach((btn) => {
//   btn.addEventListener("click", function(event){ShowHideFilter(event)});
// })


// document.querySelectorAll(".btn-all").forEach((showAllBtn) => {
// showAllBtn.addEventListener("click", function(event){ShowAll(event)});
// })

// function ShowHideFilter(e) {
//   console.log(e.target.dataset.label)
//   let listofAirtableItems = document.querySelectorAll("div.airtable-item");
//   listofAirtableItems.forEach(function SearchFilter(item) {
//     item.classList.remove("filter-hide");
//     if (item.dataset.label == e.target.dataset.label) {
//       item.classList.add("filter-show");
//     } else {
//       item.classList.add("filter-hide");
//     }
//   });
  
// }

// function ShowAll(e) {
//   let listofAirtableItems = document.querySelectorAll("div.airtable-item");
//   listofAirtableItems.forEach( function ShowAllRecords(item){
//     item.classList.remove("filter-hide");
//     item.classList.add("filter-show");
//   })
// }






document.querySelectorAll(".btn-label").forEach((btn) => {
  btn.addEventListener("click", function(event){ShowHideFilter(event, "label")});
});

document.querySelectorAll(".btn-genre").forEach((btn) => {
  btn.addEventListener("click", function(event){ShowHideFilter(event, "genre")});
});

document.querySelectorAll(".btn-mood").forEach((btn) => {
  btn.addEventListener("click", function(event){ShowHideFilter(event, "mood")});
});

document.querySelectorAll(".btn-all").forEach((showAllBtn) => {
  showAllBtn.addEventListener("click", function(event){ShowAll(event)});
});

function ShowHideFilter(e, datasetKey) {
  console.log(e.target.dataset[datasetKey]);
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  listofAirtableItems.forEach(function SearchFilter(item) {
    item.classList.remove("filter-hide");
    let itemGenres = item.dataset[datasetKey].split(",");
    if (itemGenres.includes(e.target.dataset[datasetKey])) {
      item.classList.add("filter-show");
    } else {
      item.classList.add("filter-hide");
    }
    let itemMoods = item.dataset[datasetKey].split(",");
    if (itemMoods.includes(e.target.dataset[datasetKey])) {
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
  });
}









