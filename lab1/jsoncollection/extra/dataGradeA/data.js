// function renderItems(collection) {
// 	// The `ul` where the items will be inserted
// 	const collectionList = document.querySelector(".collection");

// 	// Filter the collection array to only include items with a grade of "A"
// 	const filteredCollection = collection.filter(function(restaurant) {
// 	  return restaurant.grade === "A";
// 	});

// 	// Loop through each item in the filtered collection array
// 	filteredCollection.forEach(function(restaurant) {
// 		const listContainer = document.createElement('div'); // Make the `div
// 		listContainer.classList.add("container");

// 		const listCover = document.createElement('div'); // Make the `div
// 		listCover.classList.add("cover");

// 		const listTitle = document.createElement('div');
// 		listTitle.classList.add("title");
// 		listTitle.innerHTML =`
// 		<h2>${restaurant.dba}</h2>
// 		`
// 		listCover.appendChild(listTitle);
// 		listContainer.appendChild(listCover);


// 		let popUp = document.createElement ("div");
//         popUp.classList.add("pop-up");
//         ListCover.append(popUp);


//       	let popUpContent = document.createElement("div");
//      	popUpContent.classList.add("pop-up-content");
//     	popUp.append(popUpContent);


// 		let popUpTitle = document.createElement("div");
//               popUpTitle.classList.add("pop-up-title");
//         popUpTitle.innerHTML = restaurant.fields.dba;
//       let popUpAddress = document.createElement("div");
//               popUpAddress.classList.add("pop-up-address");
//         popUpAddress.innerHTML = `${restaurant.fields.building} ${restaurant.fields.street}, ${restaurant.fields.boro} ${restaurant.fields.zipcode}`;
//       let popUpPhone = document.createElement("div");
//               popUpPhone.classList.add("pop-up-phone");
//         popUpPhone.innerHTML = restaurant.fields.phone;
//       let popUpCusine = document.createElement("div");
//               popUpCusine.classList.add("pop-up-cusine");
//         popUpCusine.innerHTML = restaurant.fields.cusine_description;

//       let popUpCode = document.createElement("div");
//               popUpCode.classList.add("pop-up-code");
//         popUpCode.innerHTML = restaurant.fields.violation_code;


//         popUpContent.append(popUpTitle)
//         popUpContent.append(popUpAddress);
//         popUpContent.append(popUpPhone);
//         popUpContent.append(popUpCusine);
//         popUpContent.append(popUpCode);











// 		collectionList.appendChild(listContainer);
// 	});
// }
function separateItems(collection) {
	const criticalItems = collection.filter(item => item.critical_flag === "Critical");
	const nonCriticalItems = collection.filter(item => item.critical_flag !== "Critical");
	return {
	  criticalItems,
	  nonCriticalItems,
	};
  }
function renderItems(collection) {
	const { criticalItems, nonCriticalItems } = separateItems(collection);
	
	const criticalList = document.querySelector(".critical-items");
	const nonCriticalList = document.querySelector(".non-critical-items");
  
	// Render the critical items
	criticalItems.forEach(item => {
		if (item.grade === "A") {
	  const critical = document.createElement("div");
	  critical.classList.add("critical");
	  critical.innerHTML = item.dba;
	  criticalList.appendChild(critical);



	  let popUp = document.createElement ("div");
	  popUp.classList.add("pop-up");
	  critical.append(popUp);

		let popUpContent = document.createElement("div");
	   popUpContent.classList.add("pop-up-content");
	  popUp.append(popUpContent);

	  let popUpTitle = document.createElement("div");
			popUpTitle.classList.add("pop-up-title");
	  popUpTitle.innerHTML = item.dba;
	let popUpAddress = document.createElement("div");
			popUpAddress.classList.add("pop-up-address");
	  popUpAddress.innerHTML = `${item.building} ${item.street}, ${item.boro} ${item.zipcode}`;
	let popUpPhone = document.createElement("div");
			popUpPhone.classList.add("pop-up-phone");
	  popUpPhone.innerHTML = item.phone;
	let popUpCusine = document.createElement("div");
			popUpCusine.classList.add("pop-up-cusine");
	  popUpCusine.innerHTML = item.cusine_description;

	let popUpCode = document.createElement("div");
			popUpCode.classList.add("pop-up-code");
	  popUpCode.innerHTML = item.violation_code;

	  popUpContent.append(popUpTitle)
	  popUpContent.append(popUpAddress);
	  popUpContent.append(popUpPhone);
	  popUpContent.append(popUpCusine);
	  popUpContent.append(popUpCode);
	  

	  
		}
	});

  
	// Render the non-critical items
	nonCriticalItems.forEach((item) => {
		if (item.grade === "A") { // Only render if grade is "A"
		  const nonCritical = document.createElement("div");
		  nonCritical.classList.add("non-critical");
		  nonCritical.innerHTML = item.dba;
		  nonCriticalList.appendChild(nonCritical);



		  let popUp1 = document.createElement ("div");
		  popUp1.classList.add("pop-up1");
		  nonCritical.append(popUp1);
	
			let popUpContent1 = document.createElement("div");
		   popUpContent1.classList.add("pop-up-content1");
		  popUp1.append(popUpContent1);
	
		  let popUpTitle = document.createElement("div");
				popUpTitle.classList.add("pop-up-title");
		  popUpTitle.innerHTML = item.dba;
		let popUpAddress = document.createElement("div");
				popUpAddress.classList.add("pop-up-address");
		  popUpAddress.innerHTML = `${item.building} ${item.street}, ${item.boro} ${item.zipcode}`;
		let popUpPhone = document.createElement("div");
				popUpPhone.classList.add("pop-up-phone");
		  popUpPhone.innerHTML = item.phone;
		let popUpCusine = document.createElement("div");
				popUpCusine.classList.add("pop-up-cusine");
		  popUpCusine.innerHTML = item.cusine_description;
	
		let popUpCode = document.createElement("div");
				popUpCode.classList.add("pop-up-code");
		  popUpCode.innerHTML = item.violation_code;
	
		  popUpContent1.append(popUpTitle)
		  popUpContent1.append(popUpAddress);
		  popUpContent1.append(popUpPhone);
		  popUpContent1.append(popUpCusine);
		  popUpContent1.append(popUpCode);


		  let closeBtn1 = document.createElement("span");
		  closeBtn1.innerHTML = "&times;";
		  closeBtn1.classList.add("close1");
		  popUp1.appendChild(closeBtn1);
	  
		  nonCritical.onclick = function(){
			popUp1.style.display = "block";
		  }
	  
		  closeBtn1.addEventListener("click", function() {
			popUp1.style.display = "none";
		  });
		
	}



	
	});


  }
		//   let closeBtn = document.createElement("span");
		//   closeBtn.innerHTML = "&times;";
		//   closeBtn.classList.add("close");
		//   popUp.appendChild(closeBtn);
		  
		//   closeBtn.onclick = function() { 
		// 	  popUp.style.display = "none";
		//   };
		  
		//   nonCritical.addEventListener("click", () => {
		// 	  popUp.style.display = "block";
		//   });
		


// const nonCriticalElem = document.querySelector(".pop-up");

// // Add a click event listener to the pop-up title
// nonCriticalElem.addEventListener("click", () => {
//   // If the pop-up is already visible, hide it
//   if (popUp.style.display === "block") {
//     popUp.style.display = "none";
//   } else { // Otherwise, show it
//     popUp.style.display = "block";
//   }
// });

	





fetch('./data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection.reverse()); // In reverse order
	});
