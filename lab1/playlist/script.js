var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keycrorLCSvJTFGBB",
}).base("appOVeJVrznZzDkt0");



/*
students = {
  { name: "chloe" },
  { name: "chris" },
};

let winner 
let loser

students.forEach ((element, index)=> {
  console.log('index', index);
  console.log('students', students.length-1);
  if (index === students.length-1) {
    winner = student.name

//winner div element from student
  }else{
    loser = student.name
    //loser dive element
  }
  console.log ({'winner': winner, 'loser': loser})


*/

base("Vinyl")
  .select({
    // Selecting the first 5 records in Grid view:
    maxRecords: 50,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (song) {
        console.log("song", song.fields);

        let gridItems = document.queryselector(".grid-items");


        let gridItem

        gridItem = document.createElement("div");
       // console.log('gridItem', gridItem);//
        gridItem.classList.add("grid-item");
        gridItem.setAttribute("data-title", song.fields.title);

        let songTitle = document.createElement("h2");
        songTitle.classList.add("grid-item-title");
        songTitle.innerHTML = song.fields. title;
        gridItem.append(songTitle);

        gridItems.append(gridItem);


      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );




function myFunction(filter1, filter2) {
  filter1 = 'red'
console.log ('filter1',filter1)
console.log ('filter2',filter2)


  }

  let color = 'red'
  let year = '2022'


  myFunction(color, year);


//document.queryselector('.filter').addEventListener('.click')//