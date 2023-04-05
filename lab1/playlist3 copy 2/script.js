// Activate Airtable object
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keycrorLCSvJTFGBB" }).base("appOVeJVrznZzDkt0");

base("vinyl")
  .select({
    // Selecting all records from the "vinyl" table:
    view: "Grid view"
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        // Pull my Airtable data
        // Each record will have its own data
        let airtableItem = document.createElement("div");

        // Add some data-specific meta to my new divs for filtering
        airtableItem.classList.add("airtable-item");
        airtableItem.setAttribute("data-label", record.fields.Label);
        airtableItem.setAttribute("data-year", record.fields.year);

        // Create an img tag for my album art
        let albumCover = document.createElement("img");
        albumCover.src = record.fields.Attachments[0].url;

       
        // Create a span for my record year
        let recordYear = document.createElement("span");
        recordYear.innerHTML = record.fields.year;

        // Appending to div holding each Airtable record
        airtableItem.append(albumCover);
        airtableItem.append(recordYear);
        // Append div to body
        document.body.append(airtableItem);
      });

      // Loop through all airtable-item divs and hide those that don't have the desired year
      let allAirtableItems = document.querySelectorAll(".airtable-item");
      allAirtableItems.forEach(function(item) {
        if (item.getAttribute("data-year") !== "70s") {
          item.style.display = "none";
        }
      });
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

    let motownFilterBtn = document.getElementById("motown");
  motownFilterBtn.addEventListener("click", function(event) {
    
    // serach my airtable-item divs, and see which data-mood contains "motown"
    // put my airtable-divs in an array [airtable-div 1, airtable-div 2], find the div that has data-label
    let listofAirtableItems = document.querySelectorAll("div.airtable-item");
    console.log(listofAirtableItems);

    // search for data-label, containing motown
    listofAirtableItems.forEach (
      function searchMotownFilterBtn(item){
        // if dataset.mood equal to "Empowering", then we trigger something
        if (item.dataset.label == "Motown Records") {
          // if the div has data-mood empowering, add red backgroung by adding css class
                    console.log(item);
            item.classList.add("motown-filter-show");

          }

      }
      )

  });
