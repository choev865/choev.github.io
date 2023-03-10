/*var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keycrorLCSvJTFGBB",
}).base("appOVeJVrznZzDkt0");*/




//activate airtable object
var Airtable = require("airtable");
//make a variable called base, which will create a new
//airtable object, with my api key, and specific base 
//reference code-->both located in airtable account
var base=new Airtable(
{apiKey: "keycrorLCSvJTFGBB"}).base("appOVeJVrznZzDkt0");

base("vinyl").select({
//maxRecords: 2,
view: "Grid view"

})

.eachPage(
function page(records, fetchNextPage){
//console.log("running page function")
//console.log("records", records);  
//Records = [Record1, Record2, Record3]
  records.forEach(
    function (record) {
      //console.log("this is one record:", record)
      console.log("this is my airtable", record.fields);
      console.log("Genre", record.fields.Genre);
      console.log("Year", record.fields.Year);
     // console.log("Attachments", record.fields.Attachments[0]);
      console.log("Attachments", record.fields.Attachments[0].url);

    //createan img html element


  var vinylCover = document.createElement("img");
    //put airtable img src inside our html image tag
  vinylCover.classList.add("airtable-image");
  vinylCover.src = record.fields.Attachments[0].url;
  //append to new img tag to html document
  document.body.appendChild(vinylCover);


  var Artist = document.createElement("span");
  Artist.innerHTML = record.fields.Artist;
  document.body.appendChild(Artist);


    }

    )
}

);


console.log(base);