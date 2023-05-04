
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
		if (item.grade === "C") {
	  const critical = document.createElement("div");
	  critical.classList.add("critical");
	criticalList.appendChild(critical);

	  let restaurantName = document.createElement ("div");
	  restaurantName.classList.add("restaurantName");
	  restaurantName.innerHTML = item.dba;
	  critical.appendChild(restaurantName);

	  

	  let popUp = document.createElement ("div");
	  popUp.classList.add("pop-up");
	  restaurantName.append(popUp);

		let popUpContent = document.createElement("div");
	   popUpContent.classList.add("pop-up-content");
	  popUp.append(popUpContent);

	  let popUpTitle = document.createElement("div");
			popUpTitle.classList.add("pop-up-title");
	  popUpTitle.innerHTML = item.dba;

	  const content = document.createElement('div'); // Make the `div
	  content.classList.add("content");
	  content.innerHTML = `
	  <p><strong>Address:</strong> ${item.building} ${item.street}, ${item.boro} ${item.zipcode}</p>
	  <p><strong>Phone Number:</strong> ${item.phone}</p>
	  <p><strong>Cuisine:</strong> ${item.cuisine_description}</p>
	  `;

	  const violation = document.createElement('div'); // Make the `div
	  violation.classList.add("violation");
	  violation.innerHTML = `
	  <p><strong>Inspection Date:</strong> ${item.inspection_date}</p>
	  <p><strong>Record Date:</strong> ${item.record_date}</p>
	  <p><strong>Violation Code:</strong> ${item.violation_code}</p>
	  <p><strong>Violation Description:</strong> ${item.violation_description}</p>
	  <p><strong>Critical Flag:</strong> ${item.critical_flag}</p>
	  <p><strong>Score:</strong> ${item.score}</p>

	`;
	  	popUpContent.append(popUpTitle)
		  popUpContent.append(content);
		  popUpContent.append(violation);




	  let closeBtn = document.createElement("span");
		closeBtn.innerHTML = "&times;";
		closeBtn.classList.add("close");
		popUp.appendChild(closeBtn);

	restaurantName.addEventListener('click', () => {
		// Toggle show class on popup element
		popUp.classList.toggle('show');
	  });
	  
	  // Add click event listener to close button
	  closeBtn.addEventListener('click', () => {
		// Remove show class from popup element
		closeBtn.classList.remove('show');
	  });

	  

	  
		}
	});

  
	// Render the non-critical items
	nonCriticalItems.forEach((item) => {
		if (item.grade === "C") { // Only render if grade is "A"
		  const nonCritical = document.createElement("div");
		  nonCritical.classList.add("non-critical");
		  nonCriticalList.appendChild(nonCritical);

		  let restaurantName1 = document.createElement ("div");
		  restaurantName1.classList.add("restaurantName1");
		  restaurantName1.innerHTML = item.dba;
		  nonCritical.appendChild(restaurantName1);



		  let popUp1 = document.createElement ("div");
		  popUp1.classList.add("pop-up1");
		  restaurantName1.append(popUp1);
	
			let popUpContent1 = document.createElement("div");
		   popUpContent1.classList.add("pop-up-content1");
		  popUp1.append(popUpContent1);
	
		  let popUpTitle1 = document.createElement("div");
			popUpTitle1.classList.add("pop-up-title1");
	  popUpTitle1.innerHTML = item.dba;

	  const content1 = document.createElement('div'); // Make the `div
	  content1.classList.add("content1");
	  content1.innerHTML = `
	  <p><strong>Address:</strong> ${item.building} ${item.street}, ${item.boro} ${item.zipcode}</p>
	  <p><strong>Phone Number:</strong> ${item.phone}</p>
	  <p><strong>Cuisine:</strong> ${item.cuisine_description}</p>
	  `;

	  const violation1 = document.createElement('div'); // Make the `div
	  violation1.classList.add("violation1");
	  violation1.innerHTML = `
	  <p><strong>Inspection Date:</strong> ${item.inspection_date}</p>
	  <p><strong>Record Date:</strong> ${item.record_date}</p>
	  <p><strong>Violation Code:</strong> ${item.violation_code}</p>
	  <p><strong>Violation Description:</strong> ${item.violation_description}</p>
	  <p><strong>Critical Flag:</strong> ${item.critical_flag}</p>
	  <p><strong>Score:</strong> ${item.score}</p>

	`;
	  	popUpContent1.append(popUpTitle1)
		  popUpContent1.append(content1);
		  popUpContent1.append(violation1);

		  let closeBtn1 = document.createElement("span");
		  closeBtn1.innerHTML = "&times;";
		  closeBtn1.classList.add("close");
		  popUp1.appendChild(closeBtn1);
  
	  restaurantName1.addEventListener('click', () => {
		  // Toggle show class on popup element
		  popUp1.classList.toggle('show');
		});
		
		// Add click event listener to close button
		closeBtn1.addEventListener('click', () => {
		  // Remove show class from popup element
		  closeBtn1.classList.remove('show');
		});
  

	}



	
	});




	

  }
	
	

  
  function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
  }




fetch('./data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection.reverse()); // In reverse order
	});
