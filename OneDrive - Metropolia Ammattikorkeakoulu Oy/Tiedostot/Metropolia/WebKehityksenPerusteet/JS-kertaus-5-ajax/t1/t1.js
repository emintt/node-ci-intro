/* GET Method. Practice using the Fetch API with async/await to make a GET
 request and log the response.

- Utilize the Fetch API with async/await to make a GET request to the URL
https://reqres.in/api/users/1.
- Log the response data to the console.
2p */
'use strict';
(async function () {
  try {
    const url = 'https://reqres.in/api/users/1';
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, data);
    if (!response.ok) {
      console.log(response);
      throw new Error(`Error in request: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    alert(error.message);
  }
})();
