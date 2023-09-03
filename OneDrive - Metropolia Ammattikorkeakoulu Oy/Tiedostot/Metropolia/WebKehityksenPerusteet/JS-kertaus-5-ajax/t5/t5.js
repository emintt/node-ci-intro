/* In this assignment we will work with the Restaurant API to build upon the
previous lab's restaurant assignment (Assignment 2). Extend the previous restaurant
 assignment by integrating the Restaurant API and enhancing the app to display the
  current day's menu for selected restaurants.

- Begin by revisiting your previous restaurant assignment code.
- Modify the app to fetch restaurant data using a single AJAX call to the Restaurant
 API endpoint. Replace the previous hard-coded array of restaurants.
- Implement the necessary logic to display the retrieved restaurant data in your app.
- When a user clicks on a restaurant, make another AJAX call to fetch the current
day's menu for the selected restaurant from the API.
- Enhance the modal functionality to show both the restaurant details (name, address,
   etc.) and the current day's menu.
- Ensure that the modal is populated with the relevant information when a user clicks
 on a restaurant.
- Implement error handling for the AJAX calls, displaying appropriate messages if data
 retrieval fails.
- Test the app thoroughly to ensure that restaurant data and menus are displayed
 accurately.
- Make effective use of CSS for styling and layout.
10p */
async function getRestaurants() {
  try {
    const url =
      'https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1/restaurants';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error in request: ${response.status}`);
    }
    const restaurants = await response.json();
    //console.log(restaurants);
    return restaurants;
  } catch (error) {
    alert(error.message);
  }
}

(async function () {
  const restaurants = await getRestaurants();
  console.log(restaurants);
  // const restaurants = Object.values(restaurantsObject);

  // console.log(restaurants);
  // your code here
  restaurants.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    return 0;
  });

  const tbody = document.querySelector('tbody');
  const trHead = document.querySelector('tr');

  const dialog = document.querySelector('dialog');
  const h3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');

  const closeButt = document.createElement('button');
  closeButt.innerText = 'Close';

  dialog.appendChild(h3);
  dialog.appendChild(p1);
  dialog.appendChild(p2);
  dialog.appendChild(p3);
  dialog.appendChild(closeButt);

  for (const [i, r] of restaurants.entries()) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td1.innerText = r.name;
    td2.innerText = `${r.address}, ${r.postalCode}, ${r.city}`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);

    tr.addEventListener('click', function (evt) {
      const hightlightedTrs = document.querySelectorAll('.hightlight');
      for (const h of hightlightedTrs) {
        h.classList.remove('hightlight');
      }

      const list = tr.classList;
      list.add('hightlight');

      h3.innerText = restaurants[i].name;
      p1.innerText = `${restaurants[i].address}, ${restaurants[i].postalCode}, ${restaurants[i].city} `;
      p2.innerText = restaurants[i].phone;
      p3.innerText = restaurants[i].company;

      dialog.showModal();
    });

    closeButt.addEventListener('click', function (evt) {
      dialog.close();
    });
  }
})();
