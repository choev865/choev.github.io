var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keycrorLCSvJTFGBB",
}).base("appOVeJVrznZzDkt0");


let years = [];

function filterItems(type, filter){
  let allItems = Array.from(document.querySelectorAll (".airtable-item"));

  let filteredItems = allItems.filter((item) => item.dataset.year == '60s')

  console.log(filteredItems)

}



base("vinyl")
  .select({
    // Selecting the first 5 records in Grid view:
    maxRecords: 5,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record,index) {
        console.log("record", record.fields);

           record.fields.year.forEach((year) =>{
             if (!years.includes(year)) years.push(year);
            

          });




        let container = document.querySelector(".container")
        document.body.append(container)

        let airtableItem = document.createElement("div");
        airtableItem.classList.add('airtable-item');
        airtableItem.setAttribute("data-year", record.fields.year);


        let recordYear = document.createElement('h2')
        recordYear.classList.add('airtable-item-year')
        recordYear.innerHTML = record.fields.year
        airtableItem.append(recordYear)



        let recordImage = document.createElement('img');
        recordImage.classList.add('airtable-item-year')
        recordImage.src = record.fields.Attachments[0].url
        airtableItem.append(recordImage)


        // let songTitle = document.createElement("h2");
        // songTitle.classList.add('grid-item--title')
        // songTitle.innerHTML = song.fields.title
        // airtableItem.append(songTitle);

        container.append(airtableItem);








      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    // },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      } else {

        let allItems = Array.from(document.querySelectorAll(".airtable-item"));

        
        document.querySelectorAll(".filter-btn").forEach((btn)=>{
          btn.addEventListener("click", (e) =>{
            let targetFilter = e.target.dataset.year;


            document.querySelectorAll(".airtable-item").forEach((item)=> {
              if(item.dataset.year.includes (targetFilter)){
                item.classList.remove("is-hidden");
              }
              else{
                item.classList.add("is-hidden")
              }
            });
          });
        });



          document
          .querySelector('.filter-btn[data-filter="all"]')
          .addEventListener("click", (e) => {
            document.querySelectorAll(".filter-btn")
              .forEach((btn) => btn.classList.remove("is-active"));
            // apply active state to selected filter
            e.target.classList.add("is-active");
            filterItems("year", "all");
          });


