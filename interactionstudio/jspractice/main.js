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
maxRecords: 5,
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
      // console.log("Attachments", record.fields.Attachments[0]);
      
      // console.log("this is my airtable", record.fields);
      // console.log("Genre", record.fields.Genre);
      // console.log("Year", record.fields.Year);     
      // console.log("Attachments", record.fields.Attachments[0].url);

    //create an img html element


let container = document.querySelector(".container")
// console.log('container', container)

document.body.append(container)


let airtableItem = document.createElement("div")
airtableItem.classList.add('airtable-item')

container.append(airtableItem)
console.log(container)


//document.body.append(grid-item)
//container.append(grid-item);


  var vinylCover = document.createElement("img");
    //put airtable img src inside our html image tag
  vinylCover.classList.add("airtable-image");
  vinylCover.src = record.fields.Attachments[0].url;
  //append to new img tag to html document
  document.body.appendChild(vinylCover);


  var year = document.createElement("span");
 year.innerHTML = record.fields.year;
  document.body.appendChild(year);


airtableItem.append(vinylCover);
airtableItem.append(year);



    }
    )
}
);

console.log(base);







      



//function filterItems(type, filter){
//let allItems = Array.from(document.querySelectorAll('.container'))
//let filteredItems;

//filteredItems = allItems.



//}













