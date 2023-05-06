// function renderItems(collection) {
// 	// The `ul` where the items will be inserted
//   const showAll = document.querySelector('#ShowAll');
// 	const studio = document.querySelector('#Studio');
//   const lab = document.querySelector('#Lab');


// 	// Loop through each item in the collection array
// 	collection.forEach(function(item) {
//     // if (Class === 'Core 2: Studio')
//     if (item.class === "Core 2: Studio") {
// 		const listBox = document.createElement('div'); // Make the `div
// 		listBox.classList.add("box");

// 		const listTitle = document.createElement('div');
// 		listTitle.classList.add("title");
// 		listTitle.innerHTML =`
// 		<h2>${item.title}</h2>
// 		`
// 		// const listImage = document.createElement('div');
// 		// listImage.classList.add("image");
// 		// listImage.innerHTML =
// 		// `<img src="${item.image}"/>`


// 		listBox.appendChild(listTitle);
// 		// listCover.appendChild(listImage);
	

// 		const popup = document.createElement('div'); // Make the `div
// 		popup.classList.add("popup");
// 		const popupDiv = document.createElement('div'); // Make the `div
// 		popupDiv.classList.add("popupDiv");

// 		const popupImage = document.createElement('div'); // Make the `div
// 		popupImage.classList.add("popupImage");
// 		popupImage.innerHTML = 
// 		`<img src="${item.image}"/>`

// 		const content = document.createElement('div'); // Make the `div
// 		content.classList.add("content");
// 		content.innerHTML = `
// 		<h2>${item.title}</h2>
// 		<p><strong>Director:</strong> ${item.director}</p>
// 		<p><strong>Release Year:</strong> ${item.release_year}</p>
// 		<p><strong>Genre:</strong> ${item.genre.join(', ')}</p>
// 		<p><strong>Characters:</strong> ${item.characters.join(', ')}</p>
// 		<p><strong>Summary:</strong> ${item.summary}</p>
// 		<p><strong>Rating:</strong> ${item.rating}</p>
// 		<p><strong>Is Musical:</strong> ${item.is_musical}</p>
// 	  `;


// 	  popupDiv.appendChild(popupImage);
// 	  popupDiv.appendChild(content);
// 	  popup.appendChild(popupDiv);
// 	  listBox.appendChild(popup);

//  		// collectionList.appendChild(listBox);
		
		
// 		// listCover.addEventListener('click', () => {
//   		// listitem.style.opacity = listitem.style.opacity === '0' ? '1' : '0';
		 

// 		//   listCover.addEventListener('click', function() {
// 		// 	listCover.classList.toggle('card-flip');
// 		//   });

// 		// const clickableImage = document.querySelector('.clickable-image');
// 		// const popupContainer = document.querySelector('.popup-container');
		
// 		listBox.addEventListener('click', () => {
// 		  popup.style.display = 'block';
// 		});

// 		let closeBtn = document.createElement("span");
// 		closeBtn.innerHTML = "&times;";
// 		closeBtn.classList.add("close");
// 		popup.appendChild(closeBtn);
		
// 		closeBtn.onclick = function() { 
// 		  popup.style.display = "none";
// 		}
//   }

// });
// }






// fetch('./data.json')
// 	.then(function(response) {
// 		return response.json();	
// 	})
// 	.then(function(collection){
// 		// And passes the data to the function, above!
// 		renderItems(collection.reverse()); // In reverse order
// 	})




function renderItems(collection) {
  // The `ul` where the items will be inserted
  const showAll = document.querySelector('#ShowAll');
  const studio = document.querySelector('#Studio');
  const lab = document.querySelector('#Lab');

  // Helper function to filter items by class
  function filterByClass(items, className) {
    return items.filter(function(item) {
      return item.class === className;
    });
  }

  // Render items for a given filter
  function renderFilter(collection, filter) {
    // Clear the existing items
    filter.innerHTML = '';

    // Filter the collection by the filter's class
    const filteredCollection = filterByClass(collection, filter.id);

    // Loop through each item in the filtered collection array
    filteredCollection.forEach(function(item) {
      const listBox = document.createElement('div'); // Make the `div
      listBox.classList.add("box");

      const listTitle = document.createElement('div');
      listTitle.classList.add("title");
      listTitle.innerHTML =`
        <h2>${item.title}</h2>
      `;

      listBox.appendChild(listTitle);

      const popup = document.createElement('div'); // Make the `div
      popup.classList.add("popup");
      const popupDiv = document.createElement('div'); // Make the `div
      popupDiv.classList.add("popupDiv");

      const popupImage = document.createElement('div'); // Make the `div
      popupImage.classList.add("popupImage");
      popupImage.innerHTML = 
      `<img src="${item.image}"/>`

      const content = document.createElement('div'); // Make the `div
      content.classList.add("content");
      content.innerHTML = `
        <h2>${item.title}</h2>
        <p><strong>Director:</strong> ${item.director}</p>
        <p><strong>Release Year:</strong> ${item.release_year}</p>
        <p><strong>Genre:</strong> ${item.genre.join(', ')}</p>
        <p><strong>Characters:</strong> ${item.characters.join(', ')}</p>
        <p><strong>Summary:</strong> ${item.summary}</p>
        <p><strong>Rating:</strong> ${item.rating}</p>
        <p><strong>Is Musical:</strong> ${item.is_musical}</p>
      `;

      popupDiv.appendChild(popupImage);
      popupDiv.appendChild(content);
      popup.appendChild(popupDiv);
      listBox.appendChild(popup);

      listBox.addEventListener('click', () => {
        popup.style.display = 'block';
      });

      let closeBtn = document.createElement("span");
      closeBtn.innerHTML = "&times;";
      closeBtn.classList.add("close");
      popup.appendChild(closeBtn);

      closeBtn.onclick = function() { 
        popup.style.display = "none";
      }

      filter.appendChild(listBox);
    });
  }

  // Render items for each filter
  renderFilter(collection, showAll);
  renderFilter(collection, studio);
  renderFilter(collection, lab);
}

fetch('./data.json')
  .then(function(response) {
    return response.json(); 
  })
  .then(function(collection){
    // And passes the data to the function, above!
    renderItems(collection.reverse()); // In reverse order

    // Add click event listeners to the filter tabs
    const showAll = document.querySelector('#ShowAll');
    const studio = document.querySelector('#Studio');
    const lab = document.querySelector('#Lab');

    showAll.addEventListener('click', function() {
      showAll.classList.add('active');
      studio.classList.remove('active');
      lab.classList.remove('active');
    });

    // studio.addEventListener('click', function() {
    //   show

  });


function openPage1(pageName1, elmnt1, color1) {
    // Hide all elements with class="tabcontent" by default */
    var i, info, link;
    info = document.getElementsByClassName("info");
    for (i = 0; i < info.length; i++) {
      info[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    link = document.getElementsByClassName("link");
    for (i = 0; i < link.length; i++) {
      link[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName1).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt1.style.backgroundColor = color1;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen1").click();





function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();






